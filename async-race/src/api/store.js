import { getCars, getWinners } from "../utils";

//const { items: cars, count: carsCount } = await getCars(1);
//const { items: winners, count: winnersCount} = await getWinners({ page: 1});


export default {
  carsPage: 1,
  carsCount: 4,
  winnersPage: 1,
  winnersCount: 1,
  view: 'garage',
  sortBy: null,
  sortOrder: null,
};
