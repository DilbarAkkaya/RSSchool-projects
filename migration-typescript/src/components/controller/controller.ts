import AppLoader from './appLoader';
import { IDataResponse, callType, IData, ISource } from './controller-types';
import { IFetchData } from '../view/appView';

class AppController extends AppLoader {
    getSources(callback: callType<IDataResponse>) {
        super.getResp<IDataResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: callType<IFetchData>) {
        let target: HTMLDivElement = e.target as HTMLDivElement;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<IFetchData>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLInputElement;
        }
    }
}

export default AppController;
