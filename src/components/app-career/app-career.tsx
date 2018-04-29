import { Component, State } from '@stencil/core';
import { cardService } from '../../services/cardService';
import { Card } from '../../entities/card';
import { CardTypes } from '../../entities/cardTypes';
import { CardSizes } from '../../entities/cardSizes';

@Component({
  tag: 'app-career',
  styleUrl: 'app-career.scss'
})
export class AppCareer {
  @State() cards: Card[] = [null];

  private onData(cards) {
    this.cards = cards;
  }

  componentWillLoad() {
    cardService.getCards(CardTypes.career, this.onData.bind(this));
  }

  render() {
    return (
      <div>
        <tq-tagline text="You make us TIQQE" />
        <div class="flex content">
          {this.cards.map(item => {
            return (
              <tq-card cardSize={CardSizes.large} card={item}></tq-card>
            );
          })}
        </div>
      </div>
    )
  }
}