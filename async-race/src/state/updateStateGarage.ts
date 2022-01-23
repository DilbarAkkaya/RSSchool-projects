import store from "../api/store";
import { getCars } from "../api/methods";

export const updateStateGarage = async() => {
  const { items } = await getCars();
  const COUNT_OF_CARS_ON_PAGE = 7;
  const carsCount = items.length;
  store.carsCount = carsCount;

  if (store.carsPage * COUNT_OF_CARS_ON_PAGE < store.carsCount) {
    (document.getElementById('next') as HTMLButtonElement).disabled = false;
  } else {
    (document.getElementById('next') as HTMLButtonElement).disabled = true;
  }
  if (store.carsPage > 1) {
    (document.getElementById('prev') as HTMLButtonElement).disabled = false;
  } else {
    (document.getElementById('prev') as HTMLButtonElement).disabled = true;
  }
};
