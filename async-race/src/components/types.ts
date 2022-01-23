export interface ICar {
[prop: string]: string | number
}

export interface ICars  {
  items: ICar[];
  count: string | null;
}
