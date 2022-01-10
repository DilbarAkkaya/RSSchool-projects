class Raund {
  constructor(el, cont) {
    let raundBox = document.createElement('div');
    raundBox.classList.add('child-blok');
    raundBox.innerText = cont;
    this.el = raundBox;
    el.append(raundBox);
  }
}
export default Raund;
