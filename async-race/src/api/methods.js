import { garage } from "../api/variables.js";

export const getCars = async (page = 1, limit = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return{
    items: await response.json(),
    count: response.headers.get('X-Total-count'),
  };
}

export const getCar = async (id) => (await fetch(`${garage}/${id}`)).json();
