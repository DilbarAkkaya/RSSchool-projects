export interface ISource {
  id: string;
  name: string;
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
export interface IDataResponse{
    status: string;
    sources: ResponseData[];
}
export type callType<T>= (data: T)=> void; 

export enum RequestMethods {
  GET = 'GET',
  POST = 'POST',
}