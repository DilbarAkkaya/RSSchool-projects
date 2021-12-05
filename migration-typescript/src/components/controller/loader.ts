import { CallType, RequestMethods, OptionsKey, OptionsSource } from './controller-types';

class Loader {
    readonly baseLink: string;

    readonly options: OptionsKey;

    constructor(baseLink: string, options: OptionsKey) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp<T>(
        { endpoint = 'string', options = {} },
        callback: CallType<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<T>(RequestMethods.GETDATA, endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: OptionsSource, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        (Object.keys(urlOptions) as Array<keyof typeof urlOptions>).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<TData>(method: string, endpoint: string, callback: CallType<TData>, options = {}) {
        fetch(this.makeUrl(options as OptionsSource, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json() as Promise<TData>)
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
