import store from './store';
const models = ['Tesla', 'Mersedes', 'BMW', 'Toyota', 'Zhiguli', 'Moskwich', 'Opel', 'Aston Martin', 'Porshe'];
const names = ['Model S', 'CLK', '7', 'Camry', 'Combi', '9', 'Corsa', 'DB9', 'Cayene'];

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
