import { Component, Prop, State, Element } from '@stencil/core';
import { Card } from '../../entities/card';
import { imageService } from '../../services/imageService';
import { CardsRepo } from '../../repos/cardRepo';

@Component({
  tag: 'tq-card-editor',
  styleUrl: 'tq-card-editor.scss'
})

export class TqCardEditor {

  @Prop() card: Card;
  @State() _card: Card;
  @Element() element: HTMLElement;
  reader = new FileReader();
  cardRepo: CardsRepo = new CardsRepo();

  componentWillLoad() {
    this._card = this.card;
  }

  handleChange(prop, value) {
    this._card[prop] = value;
    this._card = new Card(this._card);
  }

  deleteCard(card) {
    const userAnswer = confirm(`Are you sure you want to delete this card? (${card.title})`);
    if (userAnswer !== true) { return; }
    let deleteButton = this.element.querySelector('[role=delete-card-button]');
    deleteButton.setAttribute('disabled', 'true');
    deleteButton.classList.add('loading');
    (async (card) => {
      let resp = await this.cardRepo.deleteCard(card.key);
      let json = await resp.json();
      deleteButton.removeAttribute('disabled');
      deleteButton.classList.remove('loading');
      if(json.deleted){
        location.href = '/';
      }
    })(card)
  }

  saveCard(card) {
    let saveButton = this.element.querySelector('[role=save-card-button]');
    saveButton.setAttribute('disabled', 'true');
    saveButton.classList.add('loading');
    (async (card) => {
      let resp = await this.cardRepo.putCard(card);
      let json = await resp.json();
      console.log(json);
      saveButton.removeAttribute('disabled');
      saveButton.classList.remove('loading');
    })(card)
  }

  resizeImage = async (dataURL) => {
    let resizedDataUrl = await imageService.resizeImageWithinBoundries(dataURL, 1000, 1000);
    this._card.img = resizedDataUrl;
    this._card = new Card(this._card);
  }

  imageSelected(event) {
    let self = this;
    self.reader.onload = function () {
      let dataUrl = self.reader.result;
      self.resizeImage(dataUrl)
    };

    this.reader.readAsDataURL(event.detail);
  }

  render() {
    let card = this._card;
    let cardDoesExist = card && card.key && card.key.endsWith('.json');
    return (
      <div class="flex content">
        {
          // The editor part
          <a class='no-padding'>
            <div class="image">
              image:
            <tq-input-file onFileSelected={(event) => this.imageSelected(event)} value={card.img} name="img-url"></tq-input-file>
            </div>
            <div class="header">
              <tq-input-text onInput={(event: any) => this.handleChange("title", event.target.value)} value={card.title}></tq-input-text>
              <tq-input-text onInput={(event: any) => this.handleChange("subTitle", event.target.value)} value={card.subTitle}></tq-input-text>
            </div>
            <div class="content">
              <p>
                <tq-textarea onContentChanged={(data) => { this.handleChange('text', data.detail.text); this.handleChange('html', data.detail.html); }} value={card.html || card.text}></tq-textarea>
              </p>
              <a class="button center primary" role="save-card-button" onClick={() => this.saveCard(this._card)}>{`${cardDoesExist ? 'Save' : 'Create'}`}</a>
            </div>
          </a>
        }

        {
          // Preview of the card
          <div>
            <tq-card card={card}></tq-card>
            <a class={`button center secondary ${cardDoesExist ? '' : 'hide'}`} role="delete-card-button" onClick={() => this.deleteCard(this._card)}>Delete</a>
          </div>
        }
      </div>
    )
  }
}