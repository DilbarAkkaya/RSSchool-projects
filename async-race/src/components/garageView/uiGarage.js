import { getCar, createCar, deleteCar, updateCar} from '../../api/methods';
import { generateRandomCars } from '../utils/utils';
import { renderWinners } from '../winnersView/winners';
import { updateGarageView} from './updateGarageView';

let selectedCar = null;

export const listen = () => {
  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('garage-menu-button')) {
      document.getElementById('garage-view').style.display = 'block';
      document.getElementById('winners-view').style.display = 'none';
    }
    if (event.target.classList.contains('winners-menu-button')) {
      document.getElementById('winners-view').style.display = 'block';
      document.getElementById('garage-view').style.display = 'none';
      document.getElementById('winners-view').innerHTML = renderWinners();
    }
    if (event.target.classList.contains('generator-button')) {
      event.target.disabled = true;
      const cars = generateRandomCars();
      console.log(cars)
      await Promise.all(cars.map((car) => createCar(car)));
      updateGarageView();
      event.target.disabled = false;
    }
    if (event.target.classList.contains('remove-button')) {
      const id = +event.target.id.split('remove-car-')[1];
      await deleteCar(id);
      updateGarageView();
    }
    if (event.target.classList.contains('select-button')) {
      const id = event.target.id.split('select-car-')[1];
      selectedCar = await getCar(Number(id));
      const nameOfSelectCar = selectedCar.name;
      const colorOfSelectCar = selectedCar.color;
      const updateName = document.getElementById('update-name');
      const updateColor = document.getElementById('update-color');
      const updateButton = document.getElementById('update-submit');
      updateName.value = nameOfSelectCar;
      updateColor.value = colorOfSelectCar;
      updateName.disabled = false;
      updateColor.disabled = false;
      updateButton.disabled = false;
    }
  })

  const formOfCreateCar = document.getElementById('create');

  formOfCreateCar.addEventListener('submit', async (event) => {
    event.preventDefault()
      const createName = document.getElementById('create-name');
      const createColor = document.getElementById('create-color');
      const car = {
        name: createName.value,
        color: createColor.value,
      };
      await createCar(car);
      updateGarageView();
      createName.value = '';
      createColor.value = '#ffffff';
  })

  const formOfUpdateCar = document.getElementById('update');

  formOfUpdateCar.addEventListener('submit', async (event) => {
    event.preventDefault();
    const updateName = document.getElementById('update-name');
    const updateColor = document.getElementById('update-color');
    const updateButton = document.getElementById('update-submit');
    const car = {
      name: updateName.value,
      color: updateColor.value,
    }
    if(selectedCar) {
      const id = selectedCar.id;
      await updateCar(id, car);
    }
    updateGarageView();
    updateName.value='';
    updateColor.value='#ffffff';
    updateName.disabled=true;
    updateColor.disabled=true;
    updateButton.disabled=true;
  })
}

