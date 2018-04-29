import { Component, State } from '@stencil/core';
import { cardService } from '../../services/cardService';
import { Card } from '../../entities/card';
import { CardTypes } from '../../entities/cardTypes';
import { FabIconTypes } from '../tq-fab/fabIconTypes';
import '@stencil/router';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @State() cards: Card[] = [null, null];

  private onData(cards) {
    this.cards = cards;
  }

  componentWillLoad() {
    cardService.getCards(CardTypes.home, this.onData.bind(this));
  }

  render() {
    return (
      <div>
        <tq-tagline text='TIQQE - The serverless company'></tq-tagline>
        <div class="flex content">
          {this.cards.map(item => {
            return (
              <tq-card card={item}></tq-card>
            );
          })}
        </div>
        <tq-fab key={CardTypes.home} alwaysOn={true} icon={FabIconTypes.create}></tq-fab>
      </div>
    )
  }
}