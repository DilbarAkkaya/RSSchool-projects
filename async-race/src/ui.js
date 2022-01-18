import { getCar, getCars, createCar, deleteCar, updateCar, getWinners, deleteWinner} from './api';
import store from './api/store';
import { generateRandomCars } from './utils';
import { renderGarageView} from './views';
import {updateStateGarage} from './state';
import { garage } from './api/variables';
let selectedCar = null;


/* export const render = async() => {
  const html = `
  <div class="menu">
  <button class="button garage-menu-button primary" id="garage-menu">To Garage</button>
  <button class="button winners-menu-button primary" id="winners-menu">To winners</button>
</div>
<div id="garage-view">


<div>
  <p class="message" id="message"></p>
</div>

  `;
  const root = document.createElement('div');
  root.innerHTML = html;
  document.body.appendChild(root);
}; */

/* const updateGarageView = () => {
  const header = document.getElementById('header-garage');
  header.remove();
  const listOfCars = document.querySelector('.garage');
  listOfCars.remove();
  renderGarageView();
  updateStateGarage();
} */

export const listen = () => {
  document.body.addEventListener('click', async (event) => {
    if (event.target.classList.contains('garage-menu-button')) {
      document.getElementById('garage-view').style.display = 'block';
      document.getElementById('winners-view').style.display = 'none';
    }
    if (event.target.classList.contains('winners-menu-button')) {
      document.getElementById('winners-view').style.display = 'block';
      document.getElementById('garage-view').style.display = 'none';
      await updateStateWinners();
      document.getElementById('winners-view').innerHTML = renderWinners();
    }
  })
}

