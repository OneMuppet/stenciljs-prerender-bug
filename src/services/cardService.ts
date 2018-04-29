import { CardsRepo } from '../repos/cardRepo';
import { CardTypes } from '../entities/cardTypes';

class CardService {
  public cardTypes = CardTypes;
  private cardsRepo: CardsRepo = new CardsRepo();
  public getCards(cardTypes: CardTypes, onData) {
    /**
     * Fetch 'home' cards. This syntax can be reused for all app-components.
     * We should probably wrap it into something to make this easier.
     * It will first fetch the cards meta data, that specifies which cards exists of that specific type.
     * Then it will fetch the cards one by one. 
     * 
     * There are future cases to handle like, fetch only the 10 first cards. If use scroll down, then fetch 10 more etc.
    */
    (async () => {
      let resp = await this.cardsRepo.getCards(cardTypes); // api request
      let contents: any[] = (await resp.json()).Contents; // get json from stream
      let promises = [];
      contents.forEach(async (item) => {
        promises.push(this.cardsRepo.getCard(item.Key));
      });

      // Get data
      let jsonPromises = [];

      // Await all promises to resolve. Then use the json() function (which returns a promise) 
      (await Promise.all(promises))
        .forEach((resp) => {
          jsonPromises.push(resp.json());
        });

      // Final array of json data
      const data = await Promise.all(jsonPromises);

      // Call callback and feed it with data
      onData(data);
    })()
  }
}

const cardService = new CardService();
export { cardService };