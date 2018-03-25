export default class Item {
  constructor(id, username, text, cardType) {
    this.id = id;
    this.username = username;
    this.text = text;
    this.cardType = cardType;
    this.votes = 0;
    this.voted = false;
    this.vote = this.vote.bind(this);
  }

  vote() {
    this.voted = !this.voted;
    if (this.voted) this.votes++; else this.votes--;
    return this;
  }
}
