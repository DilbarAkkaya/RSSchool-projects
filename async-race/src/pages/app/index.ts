import GaragePage from '../garage/garage';

class App {
  private container: HTMLElement;

  constructor() {
    this.container = document.body;
  }

  run() {
    this.container.innerText = 'Async-Race';
  }
}

export default App;
