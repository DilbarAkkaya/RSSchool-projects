import AppLoader from './appLoader';
import { IDataResponse, CallType, IFetchData } from './controller-types';

class AppController extends AppLoader {
    getSources(callback: CallType<IDataResponse>) {
        super.getResp<IDataResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallType<IFetchData>) {
        let target: HTMLDivElement = e.target as HTMLDivElement;
        const newsContainer = e.currentTarget as HTMLElement;

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
