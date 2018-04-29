import { Component, Prop, Element } from '@stencil/core';
import { Card } from '../../entities/card';
import { CardSizes } from '../../entities/cardSizes';

@Component({
  tag: 'tq-card',
  styleUrl: 'tq-card.scss'
})

export class TqCard {
  @Prop() card: Card;
  @Prop() cardSize: CardSizes = CardSizes.medium; // Medium is default
  @Prop() fullscreen: boolean = false;
  @Element() element;

  render() {
    let card = this.card;
    /** if card is undefined show skeleton loader */
    if (!card) {
      return (
        <div class={`skeleton loading ${this.cardSize} ${this.fullscreen ? 'fullscreen' : ''}`}>
          <i>
            <img alt='skeleton loader' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABACAQAAABxGNXLAAAADklEQVR42mNkYGAcyggAGSAAQUxJTVsAAAAASUVORK5CYII=" />
          </i>
          <div class="header"><h1></h1><h5></h5></div>
          <div class="body">
            {/* Just to ensure we have the same behavior and flexibility in the loader as in the cards */}
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
        </div>
      )
    }
    return (
      <div class={`${this.cardSize} ${this.fullscreen ? 'fullscreen' : ''}`}>
        <stencil-route-link class='button no-padding' url={`/show?key=${btoa(card.key || '')}`} exact={true} >
          <div class='header-image'>
            {
              card.img ?
                card.imgIsIcon ?
                  <i><img alt={card.title} src={card.img} /> </i> :
                  <img alt={card.title} src={card.img} />
                : ''
            }
          </div>
          <div class="header">
            <h1>{card.title}</h1>
            <h5>{card.subTitle}</h5>
          </div>
          <div class="body">
            <p innerHTML={this.fullscreen && card.html ? card.html : card.text}></p>
          </div>
        </stencil-route-link>
        <tq-fab key={this.card.key}></tq-fab>
      </div>
    )
  }
}