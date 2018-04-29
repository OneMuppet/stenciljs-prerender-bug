import { Component, State, Element } from '@stencil/core';
import { cardService } from '../../services/cardService';
import { Card } from '../../entities/card';
import { CardTypes } from '../../entities/cardTypes';
import { CardsRepo } from '../../repos/cardRepo';

@Component({
  tag: 'app-admin',
  styleUrl: 'app-admin.scss'
})

// https://developers.google.com/identity/sign-in/web/backend-auth
export class AppAdmin {
  key: string;
  cardType: CardTypes;
  cardRepo: CardsRepo = new CardsRepo();
  @Element() element;
  @State() cards: Card[] = [null, null];
  @State() card: Card;

  fetchCard(key) {
    (async () => {
      let resp = await this.cardRepo.getCard(key);
      let json = await resp.json();
      if (json.statusCode === 404) {
        console.error(json.message);
        location.href = '/';
      } else {
        this.card = new Card(json);
      }
    })();
  }

  fetchMetaData(cardType: CardTypes) {
    (async () => {
      let resp = await this.cardRepo.getMetaData(cardType);
      let json = await resp.json();
      console.log(json);
    })();
  }

  private onData(cards) {
    this.cards = cards;
  }

  private updateSignInUI() {
    let self = this;
    // Update signin button and admin form
    let adminForm = document.getElementById('adminForm');
    let signinButton = document.getElementById('signin');
    let userIsSignedIn = window["user"] && window["user"].getBasicProfile();

    if (userIsSignedIn) {
      adminForm.classList.remove('hide');
      signinButton.classList.add('hide');

      this.cardRepo = new CardsRepo();

      Array.from(document.querySelectorAll('[role=user-name]')).forEach(element => {
        element.innerHTML = window["user"].getBasicProfile().getName();
      });
    } else {
      adminForm.classList.add('hide');
      signinButton.classList.remove('hide');
    }

    // Setup logout button
    let signoutElement = self.element.querySelector('#signout');
    signoutElement.onclick = () => {
      let auth2 = window["gapi"].auth2.getAuthInstance();

      // This will sign out the user from google completly
      auth2.disconnect();

      // This only kills the local "session"
      auth2.signOut().then(() => {
        delete window["user"];
        self.updateSignInUI();
      })
    }
  }

  componentWillLoad() {
    this.key = atob(location.search.split('key=')[1] || '');
    let keyParts = this.key.split('/');
    this.cardType = CardTypes[keyParts[0]];

    // if a full card exists try to get it
    if (keyParts[1]) {
      this.fetchCard(this.key);
    } else {
      this.card = new Card({ key: this.cardType, title: '', subTitle: '', text: '', html: '' });
    }
    this.fetchMetaData(this.cardType);
    cardService.getCards(CardTypes.people, this.onData.bind(this));
  }

  componentDidLoad() {
    this.updateSignInUI();
    window["onSignIn"] = (googleUser) => {
      if (!googleUser) { return; }

      let googleAuth = window["gapi"].auth2.getAuthInstance();
      let user = googleUser;
      window["user"] = user;
      googleAuth.isSignedIn.listen(window["updateSigninUI"]);
      this.updateSignInUI();
    }

    if (window['gapi']) {
      window['gapi'].signin2.render('signin', {
        'scope': 'profile email',
        'onsuccess': (googleUser) => {
          window['user'] = googleUser;
          this.updateSignInUI();
          if (!this.key) {
            location.href = '/';
          }
        },
        'onfailure': (error) => {
          console.log(error);
        }
      });
    }
  }

  render() {
    return (
      <div>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <div id="signin"></div>
        <div id="adminForm" class="hide">
          <div id="user-id"></div>
          <a role="button" class="button always-on" id="signout">Sign out <span role="user-name"></span></a>
          {
            this.card ?
              <tq-card-editor card={this.card}></tq-card-editor>
              : ''
          }
        </div>
      </div>
    )
  }
}