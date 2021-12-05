import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '2acbde45657e45608e9ef56423cffd57',
        });
    }
}

export default AppLoader;
