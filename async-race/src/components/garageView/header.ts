import { getCars } from "../../api/methods";
import store from "../../api/store";

export const renderHeaderOfGarage = async () => {
  await getCars().then((res) => {
    const garageView = document.getElementById('garage-view') as HTMLElement;
    const partOfgarageView = document.createDocumentFragment();
    const header = document.createElement('div');
    header.id = 'header-garage';
    const titleOfGarageView = document.createElement('h1');
    titleOfGarageView.classList.add('header');
    titleOfGarageView.innerHTML = `Garage ${res.count}`;
    const subTitle = document.createElement('h2');
    subTitle.innerHTML = `Page #${store.carsPage}`;
    header.append(titleOfGarageView);
    header.append(subTitle);
    partOfgarageView.append(header);
    garageView.append(partOfgarageView);
  })
}
