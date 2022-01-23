import { renderGarageView } from "./components/garageView/garage";
import { renderWinners } from "./components/winnersView/winners";

export const renderAppHTML = async () => {
  const main =
    `<div class="menu">
      <button class="button garage-menu-button primary" id="garage-menu">To Garage</button>
      <button class="button winners-menu-button primary" id="winners-menu">To winners</button>
     </div>
    <div id="garage-view">
      ${renderGarageView()}
    </div>
    <div id="winners-view" style="display: none">
      ${renderWinners()}
    </div>
    <div class="pagination">
      <button class="button primary prev-button" id="prev">Prev</button>
      <button class="button primary next-button" id="next">Next</button>
    </div>
    `
  const root = document.createElement('div');
  root.classList.add('wrapper');
  root.innerHTML = main;
  document.body.append(root);
}
