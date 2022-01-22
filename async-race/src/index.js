import { renderAppHTML } from './app';
import { listen } from './components/garageView/uiGarage';
import { updateStateGarage } from './state/updateStateGarage';
import './style.css';

document.addEventListener('DOMContentLoaded', async () => {
  renderAppHTML();
  await updateStateGarage();
  listen();
})

