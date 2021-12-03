import { IDataResponse } from '../controller/controller-types';
import News from './news/news';
import Sources from './sources/sources';

interface ISource {
    id: string;
    name: string;
  }

interface IData {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: {id: string; name: string};
    title: string;
    url: string;
    urlToImage: string;
  }

export interface IFetchData{
    articles: IData[];
    status: string;
    totalResults: number;
}

interface IFetchSource{
    status: string;
    sources: ISource[];
}
export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IFetchData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataResponse) {
        
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
