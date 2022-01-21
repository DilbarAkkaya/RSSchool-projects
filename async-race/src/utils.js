import { names, models } from './api/variables';
const COUNT_OF_HEXDEC_SYMBOLS = 6;
const COUNT_OF_HEXDECIMALCODE = 16;

const getRandomName = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * models.length)];
  return `${model} ${name}`;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < COUNT_OF_HEXDEC_SYMBOLS; i++) {
    color += letters[Math.floor(Math.random() * COUNT_OF_HEXDECIMALCODE)];
  }
  return color;
}

export const generateRandomCars = (count = 100) => {
  new Array(count).fill(1).map(() => ({name: getRandomName(), color: getRandomColor()}))
}
