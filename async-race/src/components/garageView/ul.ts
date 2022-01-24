import { getCars } from "../../api/methods";
import { ICar } from "../types";
import { renderCar } from "./garage";

export const renderListOfCars = async () => {
  await getCars().then((res) => {
    const garageView = document.getElementById('garage-view') as HTMLElement;
    const partOfgarageView = document.createDocumentFragment();
    const listOfCars = document.createElement('ul');
    listOfCars.classList.add('garage');
    res.items.forEach((item: ICar) => {
      const itemOfList = document.createElement('li');
      itemOfList.innerHTML=renderCar(item);
      listOfCars.append(itemOfList);
    })
    partOfgarageView.append(listOfCars);
    garageView.appendChild(partOfgarageView);
  })
}
