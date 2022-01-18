import { render, listen, updateStateGarage } from './ui';
import './style.css';

document.addEventListener('DOMContentLoaded', async () => {
  render();
  await updateStateGarage();
  listen();
})

