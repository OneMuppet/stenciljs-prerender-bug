import { Component } from '@stencil/core';
import { CardsRepo } from '../../repos/cardRepo';
import { Card } from '../../entities/card';
//import { CardTypes } from '../../entities/cardTypes';

@Component({
  tag: 'app-work',
  styleUrl: 'app-work.scss'
})
export class AppWork {
  repo: CardsRepo;

  componentWillLoad() {
    this.repo = new CardsRepo();
  }

  cards: Card[] = [{
    id: 'something-something-xda',
    updated: new Date(),
    created: new Date(),
    updatedBy: 'david.borgenvik@tiqqe.com',
    createdBy: 'david.borgenvik@tiqqe.com',
    img: '../assets/images/postnord.jpg',
    title: 'We + PostNord',
    subTitle: 'a serverless future',
    text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: 'something-something-xda',
    updated: new Date(),
    created: new Date(),
    updatedBy: 'david.borgenvik@tiqqe.com',
    createdBy: 'david.borgenvik@tiqqe.com',
    img: '../assets/images/freight-lable.jpg',
    title: 'We + PostNord',
    subTitle: 'a serverless future',
    text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: 'something-something-xda',
    updated: new Date(),
    created: new Date(),
    updatedBy: 'david.borgenvik@tiqqe.com',
    createdBy: 'david.borgenvik@tiqqe.com',
    img: '../assets/images/card.png',
    title: 'We + PostNord',
    subTitle: 'a serverless future',
    text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: 'something-something-xda',
    updated: new Date(),
    created: new Date(),
    updatedBy: 'david.borgenvik@tiqqe.com',
    createdBy: 'david.borgenvik@tiqqe.com',
    img: '../assets/images/card.png',
    title: 'We + PostNord',
    subTitle: 'a serverless future',
    text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  }
  ];

  render() {
    return (
      <div>
        <tq-tagline text='Customers makes us TIQQE'></tq-tagline>
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