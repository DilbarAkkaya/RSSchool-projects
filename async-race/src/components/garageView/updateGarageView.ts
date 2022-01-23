import { updateStateGarage } from "../../state/updateStateGarage";
import { renderGarageView } from "./garage";

export const updateGarageView = () => {
  const header = document.getElementById('header-garage') as HTMLElement;
  header.remove();
  const listOfCars = document.querySelector('.garage') as HTMLElement;
  listOfCars.remove();
  renderGarageView();
  updateStateGarage();
}
