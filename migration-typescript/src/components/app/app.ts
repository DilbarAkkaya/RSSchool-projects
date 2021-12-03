import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface ISource {
    id: string;
    name: string;
  }
interface IData {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
  }
interface IDataResponse{
    status: string;
    totalResults: number;
    articles: IData[];
  }
interface ControllerDataObj{
    category: string;
    country: string
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
  }
interface ControllerData{
    status: string;
    sources: ControllerDataObj[];
  }
class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => {
                //console.log(data);
                this.view.drawNews(data)}));
        this.controller.getSources((data) => {
            this.view.drawSources(data)});
    }
}

export default App;
