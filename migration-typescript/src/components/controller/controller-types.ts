export interface ISource {
  readonly id: string;
  readonly name: string;
};
export interface IData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
};
export interface ResponseData{
  category: string;
  country: string
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}
export type PickResponseData = Pick<ResponseData, 'id' | 'name' >;
export interface IDataResponse{
    status: string;
    sources: ResponseData[];
}
export interface IFetchData{
  articles: IData[];
  status: string;
  totalResults: number;
}
export type callType<T>= (data: T)=> void; 

export enum RequestMethods{
  GETDATA = 'GET',
  POSTDATA = 'POST'
}
export type optionsKey = {
  apiKey: string;
}
export type optionsSource = {
  sources: string;
}