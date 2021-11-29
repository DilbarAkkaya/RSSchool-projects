import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2acbde45657e45608e9ef56423cffd57', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
