import { Component, State } from '@stencil/core';
import { cardService } from '../../services/cardService';
import { Card } from '../../entities/card';
import { CardTypes } from '../../entities/cardTypes';

@Component({
  tag: 'app-culture',
  styleUrl: 'app-culture.scss'
})
export class AppCulture {
  @State() cards: Card[] = [null, null, null, null, null, null];

  private onData(cards) {
    this.cards = cards;
  }

  componentWillLoad() {
    cardService.getCards(CardTypes.culture, this.onData.bind(this));
  }

  render() {
    return (
      <div>
        <tq-tagline text="Culture makes us TIQQE" />
        <div class="flex content">
          {this.cards.map(item => {
            return (
              <tq-card card={item}></tq-card>
            );
          })}
        </div>
      </div>
    )
  }
}