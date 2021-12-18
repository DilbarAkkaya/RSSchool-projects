
export class Card {
  constructor(el) {
    this.el = el;
   // let card = document.createElement("div");
/*     card.classList.add("card");
    card.innerHTML = cont;
    this.card = card;
    el.append(card); */
  }
  renderCard(data) {
/*     let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h2 class="card-title">${data[i].name}</h2>
    <img src="/assets/toys/${data[i].num}.png" alt="toy" class="card-img">
    <div class="card-descr">
      <p class="count">Количество: <span>${data[i].count}</span></p>
      <p class="year">Год покупки: <span>${data[i].year}</span></p>
      <p class="shape">Форма: <span>${data[i].shape}</span></p>
      <p class="color">Цвет: <span>${data[i].color}</span></p>
      <p class="size">Размер: <span>${data[i].size}</span></p>
      <p class="favorite">Любимая: <span>${makeFavorite()}</span></p>
    </div>
    <div class= "ribbon"></div>
</div>`;
    this.card = card;
    el.append(card); */


  for (let i = 0; i < data.length; i++) {
    /* function makeFavorite() {
      let isFavorited = data[i].favorite == true ? "Да" : "Нет";
      return isFavorited
    } */
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h2 class="card-title">${data[i].name}</h2>
    <img src="/assets/toys/${data[i].num}.png" alt="toy" class="card-img">
    <div class="card-descr">
      <p class="count">Количество: <span>${data[i].count}</span></p>
      <p class="year">Год покупки: <span>${data[i].year}</span></p>
      <p class="shape">Форма: <span>${data[i].shape}</span></p>
      <p class="color">Цвет: <span>${data[i].color}</span></p>
      <p class="size">Размер: <span>${data[i].size}</span></p>
      <p class="favorite">Любимая: <span>${data[i].favorite == true ? "Да" : "Нет"}</span></p>
    </div>
    <div class= "ribbon"></div>
</div>`;
   this.el.append(card);
  }
}
}
