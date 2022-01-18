import { getCar, getCars, createCar, deleteCar, updateCar, getWinners, deleteWinner} from './api';
import store from './api/store';
import { generateRandomCars } from './utils';
let selectedCar = null;


export const render = async() => {
  const html = `
  <div class="menu">
  <button class="button garage-menu-button primary" id="garage-menu">To Garage</button>
  <button class="button winners-menu-button primary" id="winners-menu">To winners</button>
</div>
<div id="garage-view">


<div id="garage">
  ${renderGarage()}
</div>
<div>
  <p class="message" id="message"></p>
</div>
</div>
<div id="winners-view" style="display: none">
  ${renderWinners()}
</div>
<div class="pagination">
  <button class="button primary prev-button" disabled id="prev">Prev</button>
  <button class="button primary next-button" disabled id="prev">Next</button>
</div>
  `;
  const root = document.createElement('div');
  root.innerHTML = html;
  document.body.appendChild(root);
};

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

/* export const updateStateWinners = async() => {
  const { items, count} = await getWinners({ page: store.winnersPage, sort: store.sortBy, order: store.sortOrder});
  store.winners = items;
  store.winnersCount = count;

  if (store.winnersPage * 10 < store.winnersCount) {
    document.getElementById('next').disabled = false;
  } else {
    document.getElementById('next').disabled = true;
  }
  if (store.winnersPage > 1) {
    document.getElementById('prev').disabled = false;
  } else {
    document.getElementById('prev').disabled = true;
  }
}; */

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

