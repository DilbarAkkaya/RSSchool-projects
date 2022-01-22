import { updateStateGarage } from "../../state/updateStateGarage";
import { renderGarageView } from "./garage";

export const updateGarageView = () => {
  const header = document.getElementById('header-garage');
  header.remove();
  const listOfCars = document.querySelector('.garage');
  listOfCars.remove();
  renderGarageView();
  updateStateGarage();
}
