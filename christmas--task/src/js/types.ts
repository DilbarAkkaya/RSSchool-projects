export interface IDataOfToys {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}

export interface ISetting {
  shape: string[],
  color: string[],
  size: string[],
  year: number[],
  count: number[],
  favorite: boolean
}
