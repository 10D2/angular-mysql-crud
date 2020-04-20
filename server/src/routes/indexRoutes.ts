import { Router} from 'express' //Router es un método
import { indexController } from '../controllers/indexController';


class IndexRoutes{  

   public router: Router = Router()   // Una propiedad de router de TIPO Router y va almacenar un OBJETo de tipo Router. Se añadió un MODIFICAR de tipo PUBLIC

    constructor(){
        this.config()
    }
    
    config(): void{
        this.router.get('/', indexController.indx)
    }

}

const indexRoutes = new IndexRoutes() // Al instanciar la clase

export default indexRoutes.router;
