"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SongsController {
    list(req, res) {
        res.json({ text: 'enlistando canciones' });
    }
    listone(req, res) {
        res.json({ text: 'enlistando cancion' + req.params.id });
    }
    create(req, res) {
        console.log(req.body);
        localStorage.setItem(req.body.nombre, req.body);
        res.json({ text: 'creada cancion' });
    }
    delete(req, res) {
        res.json({ text: 'eliminando cancion' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'actualizando cancion' + req.params.id });
    }
}
const songsController = new SongsController();
exports.default = songsController;
