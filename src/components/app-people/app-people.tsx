import { Component, State } from '@stencil/core';
import { cardService } from '../../services/cardService';
import { Card } from '../../entities/card';
import { CardTypes } from '../../entities/cardTypes';
import { CardSizes } from '../../entities/cardSizes';

@Component({
  tag: 'app-people',
  styleUrl: 'app-people.scss'
})
export class AppPeople {
  @State() cards: Card[] = [null, null];

  private onData(cards) {
    this.cards = cards;
  }

  componentWillLoad() {
    cardService.getCards(CardTypes.people, this.onData.bind(this));
  }

  render() {
    return (
      <div>
        <tq-tagline text="people makes us TIQQE" />
        <div class="flex content">
          {this.cards.map(item => {
            return (
              <tq-card cardSize={CardSizes.small} card={item}></tq-card>
            );
          })}
        </div>
      </div>
    )
  }
}