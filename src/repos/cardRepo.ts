import { BaseRepo } from "./baseRepo";
import { CardTypes } from "../entities/cardTypes";
import { Card } from "../entities/card";
//import { Card } from "../entities/card";

export class CardsRepo extends BaseRepo {
  baseUrl: string = 'https://83gcbt1nbc.execute-api.eu-west-1.amazonaws.com/test/';

  constructor() {
    super();
  }

  /**
   * Returns array of card list data.
   */
  public getCards(cardType: CardTypes) {
    return fetch(`${this.baseUrl}cards/${cardType}`, { headers: this.getHeaders() });
  }

  /**
   * Returns array of card meta data.
   */
  public getMetaData(cardType: CardTypes) {
    return fetch(`${this.baseUrl}metadata/${cardType}`, { headers: this.getHeaders() });
  }

  /**
   * Returns a card from origin.
   */
  public getCard(key: string) {
    return fetch(`${this.baseUrl}card/${key}`);
  }

  /**
   * Saves a card to the bucket.
   */
  public putCard(card: Card) {
    return fetch(`${this.baseUrl}card/${card.key}`, {
      body: JSON.stringify(card), // must match 'Content-Type' header
      headers: this.getHeaders(),
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    });
  }
  
  /**
   * Deletes a card.
   */
  public deleteCard(key: string) {
    return fetch(`${this.baseUrl}card/${key}`, {
      headers: this.getHeaders(),
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
    });
  }
}