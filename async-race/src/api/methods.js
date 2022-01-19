import { garage } from "../api/variables.js";

export const getCars = async (page = 1, limit = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return{
    items: await response.json(),
    count: response.headers.get('X-Total-count'),
  };
}

export const getCar = async (id) => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();


export const deleteCar = async (id) => (await fetch(`${garage}/${id}`, {method: 'DELETE'})).json();
 export const updateCar = async (id, body) => (await fetch(`${garage}/${id}`, {
   method: 'PUT',
   body: JSON.stringify(body),
   headers: {
     'Content-Type': 'application/json'
   },
 })).json();
