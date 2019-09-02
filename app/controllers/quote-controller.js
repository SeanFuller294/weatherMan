import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()


function drawQuote() {
  let quoteSpot = document.getElementById("quote")
  quoteSpot.style.backgroundColor = "rgba(0,0,0,.4)"
  quoteSpot.style.color = "white"
  // @ts-ignore
  let quote = _qs.Quote.quote
  // @ts-ignore
  let author = _qs.Quote.author
  quoteSpot.innerHTML = `${quote} <br> ${author}`
}

//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    _qs.addSubscriber("quote", drawQuote)
    _qs.getQuote()

  }
}
