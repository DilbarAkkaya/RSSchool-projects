import data from "../data";
export class Card {
  constructor(el, cont) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = cont;
    this.card = card;
    el.append(card);
  }
  }
