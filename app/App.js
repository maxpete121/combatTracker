import { router } from './router-config.js';
import { personsController } from './controllers/personsController.js';

class App {

  router = router

  personsController = new personsController()


}


const app = new App()
// @ts-ignore
window.app = app
