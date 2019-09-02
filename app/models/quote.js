export default class Quote {
  constructor(data) {
    this.author = data.quote.author
    this.quote = data.quote.body
  }
}