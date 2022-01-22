import store from '../../api/store';

export const renderWinners = () => `
<h1>Winners (${store.winnersCount})</h1>
<h2>Page #${store.winnersPage}</h2>
<table class="table" cellspacing="0" border="0" cellpadding="0">
<thead>
  <th>Number</th>
  <th>Car</th>
  <th>Name</th>
  <th class="table-button table-wins ${store.sortBy === 'wins' ? store.sortOrder : ''}" id="sort-by-wins">Wins</th>
  <th class="table-button table-time ${store.sortBy === 'time' ? store.sortOrder : ''}" id="sort-by-time">Best time (seconds)</th>
</thead>
<tbody>
<tr>
    <td>1</td>
    <td>Картинка</td>
    <td>Имя</td>
    <td>Количество побед</td>
    <td>Лучшее время</td>
  </tr>
</tbody>
</table>`;
