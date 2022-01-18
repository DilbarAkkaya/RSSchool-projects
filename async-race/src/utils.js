import store from './api/store';
import { names, models } from './api/variables';

const getRandomName = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * models.length)];
  return `${model} ${name}`;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const generateRandomCars = (count = 100) => {new Array(count).fill(1).map(() => ({name: getRandomName(), color: getRandomColor()}))

}
