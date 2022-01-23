import { garage } from "./variables";
import { ICars, ICar } from "../components/types";

export const getCars: (page?: number, limit?: number) => Promise<ICars> = async (page = 1, limit = 7): Promise<ICars> => {
  const response: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return{
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
}

export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: ICar) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar = async (id: number) => (await fetch(`${garage}/${id}`, {method: 'DELETE'})).json();
export const updateCar = async (id: number, body: ICar) => (await fetch(`${garage}/${id}`, {
   method: 'PUT',
   body: JSON.stringify(body),
   headers: {
     'Content-Type': 'application/json',
   },
 })).json();
