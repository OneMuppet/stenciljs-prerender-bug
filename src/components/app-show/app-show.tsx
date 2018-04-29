import { Component, State } from '@stencil/core';
import { Card } from '../../entities/card';
import { CardsRepo } from '../../repos/cardRepo';

@Component({
  tag: 'app-show',
  styleUrl: 'app-show.scss'
})
export class AppShow {
  @State() card: Card;
  key: string;
  cardRepo: CardsRepo = new CardsRepo();

  fetchCard(key) {
    (async () => {
      let resp = await this.cardRepo.getCard(key);
      let json = await resp.json();
      this.card = new Card(json);
    })();
  }

  componentWillLoad() {
    this.key = atob(location.search.split('key=')[1] || '');
    this.fetchCard(this.key);
  }

  render() {
    return (
      <div class="content">
        <tq-card card={this.card} fullscreen={true}></tq-card>
      </div>
    )
  }
}