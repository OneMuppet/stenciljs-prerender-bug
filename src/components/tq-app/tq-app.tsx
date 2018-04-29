import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'tq-app',
  styleUrl: 'tq-app.scss'
})
export class TqApp {

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  setupGoogleSignin() {
    if (!window['gapi']) { return; }
    window['gapi'].load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      window['gapi'].auth2.init({
        client_id: '708651943190-re5lrm9n7ri7tlsk5pb3o6tqc645m0le.apps.googleusercontent.com',
        ux_mode: 'popup'
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      }).then((data) => {
        let user = data.currentUser.get();
        window['user'] = user;
        // create and dispatch the event
        var event = new CustomEvent('onSignIn', {
          detail: { user }
        });
        window.dispatchEvent(event);
      });
    });
  }

  componentWillLoad() {
    if (this.isMobileDevice()) {
      document.body.classList.add('mobile');
    }
    this.setupGoogleSignin();
  }

  render() {
    return (
      <div>
        <tq-topbar></tq-topbar>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
              <stencil-route-redirect url='/home'></stencil-route-redirect>
            </stencil-route>
            <stencil-route url='/home' component='app-home'></stencil-route>
            <stencil-route url='/work' component='app-work'></stencil-route>
            <stencil-route url='/culture' component='app-culture'></stencil-route>
            <stencil-route url='/career' component='app-career'></stencil-route>
            <stencil-route url='/people' component='app-people'></stencil-route>
            <stencil-route url={['/show', '/show?key=*']} component='app-show'></stencil-route>
            <stencil-route url={['/admin', '/admin?key=*']} component='app-admin'></stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
