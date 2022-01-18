const base = "http://127.0.0.1:3000";
const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

export const getCars = async (page, limit = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return{
    items: await response.json(),
    count: response.headers.get('X-Total-count'),
  };
}

export const getCar = async (id) => (await fetch(`${garage}/${id}`)).json();
