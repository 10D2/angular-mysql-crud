"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    indx(req, res) {
        res.json({ text: 'API is /api/games' });
    }
}
exports.indexController = new IndexController();
