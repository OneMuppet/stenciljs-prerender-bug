export class Card {
  public id?: string;
  public key?: string;
  public created?: Date;
  public updated?: Date;
  public createdBy?: string;
  public updatedBy?: string;
  public title?: string;
  public subTitle?: string;
  public text?: string;
  public html?: string;
  public img?: string;
  public imgIsIcon?: boolean = false;

  constructor(card: Card) {
    this.id = card.id;
    this.key = card.key;
    this.created = card.created;
    this.updated = card.updated;
    this.createdBy = card.createdBy;
    this.updatedBy = card.updatedBy;
    this.title = card.title;
    this.subTitle = card.subTitle;
    this.text = card.text;
    this.html = card.html;
    this.img = card.img;
    this.imgIsIcon = card.imgIsIcon;
  }
}
