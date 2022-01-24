import { ICar } from "../types";
import { renderHeaderOfGarage } from "./header";
import { renderListOfCars } from "./ul";
import { renderCarImage } from "./svg";
import { renderFormOfGarage } from "./form";

export const renderCar: (car: ICar) => string = (car) => `
  <div class = "general-buttons">
    <button class="button select-button" id="select-car-${car.id}">Select</button>
    <button class="button remove-button" id="remove-car-${car.id}">Remove</button>
    <span class="car-name">${car.name}</span>
  </div>
  <div class="road">
    <div class="launch-pad">
      <div class="control-panel">
        <button class="icon start-engine-button" id="start-engine-car-${car.id}" ${car.isStart ? 'disabled' : ''}>A</button>
        <button class="icon stop-engine-button" id="stop-engine-car-${car.id}" ${!car.isStart ? 'disabled' : ''}>B</button>
      </div>
      <div class="car" id="car-${car.id}">
        ${renderCarImage(car.color)}
      </div>
    </div>
    <div class="flag" id="flag-${car.id}">🚩</div>
  </div>`;

const renderButtonsOfRace = () => {
  const buttonHtml =
  `<div class="race-controls">
  <button class="button race-button primary" id="race">Race</button>
  <button class="button reset-button primary" id="reset">Reset</button>
  <button class="button generator-button" id="generator">Generate cars</button>
</div>`;
  return buttonHtml;
}

export const renderGarageView = () => {
  renderHeaderOfGarage();
  renderListOfCars();
  const renderTotal = renderFormOfGarage() + renderButtonsOfRace();
  return renderTotal;
}
