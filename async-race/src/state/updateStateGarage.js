import store from "../api/store";
import { getCars } from "../api/methods";

export const updateStateGarage = async() => {
  const { items } = await getCars();
  const carsCount = items.length;
  store.carsCount = carsCount;

  if (store.carsPage * 7 < store.carsCount) {
    document.getElementById('next').disabled = false;
  } else {
    document.getElementById('next').disabled = true;
  }
  if (store.carsPage > 1) {
    document.getElementById('prev').disabled = false;
  } else {
    document.getElementById('prev').disabled = true;
  }
};
