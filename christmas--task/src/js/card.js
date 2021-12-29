export class Card {
  constructor(el) {
    this.el = el;
  }
  renderCard(data) {
    let favoriteCards = JSON.parse(localStorage.getItem('myFavoriteToys'));
    for (let i = 0; i < data.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
    <h2 class="card-title">${data[i].name}</h2>
    <img src="./assets/toys/${data[i].num}.png" alt="toy" class="card-img">
    <div class="card-descr">
      <p class="count">Количество: <span>${data[i].count}</span></p>
      <p class="year">Год покупки: <span>${data[i].year}</span></p>
      <p class="shape">Форма: <span>${data[i].shape}</span></p>
      <p class="color">Цвет: <span>${data[i].color}</span></p>
      <p class="size">Размер: <span>${data[i].size}</span></p>
      <p class="favorite">Любимая: <span>${data[i].favorite == true ? "Да" : "Нет"}</span></p>
    </div>
    ${favoriteCards.includes(data[i].num) ? '<div class= "ribbon colored"></div>': '<div class= "ribbon"></div>'}

</div>`;
      card.classList.add("hide-anime");
      card.dataset.num = data[i].num;
      this.el.append(card);
    }
  }
}
