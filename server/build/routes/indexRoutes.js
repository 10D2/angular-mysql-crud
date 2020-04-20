"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Router es un método
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router(); // Una propiedad de router de TIPO Router y va almacenar un OBJETo de tipo Router. Se añadió un MODIFICAR de tipo PUBLIC
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.indx);
    }
}
const indexRoutes = new IndexRoutes(); // Al instanciar la clase
exports.default = indexRoutes.router;
