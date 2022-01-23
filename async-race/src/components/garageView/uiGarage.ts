import { getCar, createCar, deleteCar, updateCar} from '../../api/methods';
import { ICar } from '../types';
import { generateRandomCars } from '../utils/utils';
import { renderWinners } from '../winnersView/winners';
import { updateGarageView} from './updateGarageView';

let selectedCar: ICar | null = null;

export const listen = () => {
  document.addEventListener('click', async (event: Event) => {
    if ((event.target as HTMLButtonElement).classList.contains('garage-menu-button')) {
      (document.getElementById('garage-view') as HTMLDivElement).style.display = 'block';
      (document.getElementById('winners-view') as HTMLDivElement).style.display = 'none';
    }
    if ((event.target as HTMLButtonElement).classList.contains('winners-menu-button')) {
      (document.getElementById('winners-view') as HTMLDivElement).style.display = 'block';
      (document.getElementById('garage-view') as HTMLDivElement).style.display = 'none';
      (document.getElementById('winners-view') as HTMLDivElement).innerHTML = renderWinners();
    }
    if ((event.target as HTMLButtonElement).classList.contains('generator-button')) {
      (event.target as HTMLButtonElement).disabled = true;
      const cars = generateRandomCars();
      await Promise.all(cars.map((car) => createCar(car)));
      updateGarageView();
      (event.target as HTMLButtonElement).disabled = false;
    }
    if ((event.target as HTMLButtonElement).classList.contains('remove-button')) {
      const id = +(event.target as HTMLElement).id.split('remove-car-')[1];
      await deleteCar(id);
      updateGarageView();
    }
    if ((event.target as HTMLButtonElement).classList.contains('select-button')) {
      const id = (event.target as HTMLElement).id.split('select-car-')[1];
      selectedCar = await getCar(Number(id));
      const nameOfSelectCar: string = selectedCar?.name as string;
      const colorOfSelectCar: string = selectedCar?.color as string;
      const updateName: HTMLInputElement = document.getElementById('update-name') as HTMLInputElement;
      const updateColor: HTMLInputElement = document.getElementById('update-color') as HTMLInputElement;
      const updateButton: HTMLInputElement = document.getElementById('update-submit') as HTMLInputElement;
      (updateName as HTMLInputElement).value = nameOfSelectCar;
      (updateColor as HTMLInputElement).value = colorOfSelectCar;
      updateName.disabled = false;
      updateColor.disabled = false;
      updateButton.disabled = false;
    }
  })

  const formOfCreateCar: HTMLInputElement = document.getElementById('create') as HTMLInputElement;

  formOfCreateCar.addEventListener('submit', async (event) => {
    event.preventDefault()
    const createName: HTMLInputElement = document.getElementById('create-name') as HTMLInputElement;
    const createColor: HTMLInputElement = document.getElementById('create-color') as HTMLInputElement;
    const car = {
      name: createName.value,
      color: createColor.value,
    };
    await createCar(car);
    updateGarageView();
    createName.value = '';
    createColor.value = '#ffffff';
  })

  const formOfUpdateCar: HTMLInputElement = document.getElementById('update') as HTMLInputElement;

  formOfUpdateCar.addEventListener('submit', async (event) => {
    event.preventDefault();
    const updateName: HTMLInputElement = document.getElementById('update-name') as HTMLInputElement;
    const updateColor: HTMLInputElement = document.getElementById('update-color') as HTMLInputElement;
    const updateButton: HTMLButtonElement = document.getElementById('update-submit') as HTMLButtonElement;
    const car = {
      name: updateName.value,
      color: updateColor.value,
    }
    if(selectedCar) {
      const id: number = selectedCar.id as number;
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

