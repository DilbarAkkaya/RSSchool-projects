import { listen } from './ui';
import { updateStateGarage } from './state/updateState';
import './style.css';
import { renderAppHTML } from './app';

document.addEventListener('DOMContentLoaded', async () => {
  renderAppHTML();
  await updateStateGarage();
  listen();
})

