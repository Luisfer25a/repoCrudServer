"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Canciones = [];
class SongsController {
    list(req, res) {
        if (Canciones.length > 0) {
            res.status(200).json(Canciones);
        }
        else {
            res.status(404).json(Canciones);
        }
    }
    listone(req, res) {
        let Cancion;
        for (let i = 0; i < Canciones.length; i++) {
            if (Canciones[i].nombre == req.params.id) {
                Cancion = Canciones[i];
            }
        }
        if (Cancion == null) {
            res.status(404).json({ Response: '404 Not found' });
        }
        else {
            res.status(200).json(Cancion);
        }
    }
    create(req, res) {
        Canciones.push((req.body));
        res.status(201).json({ Response: '201' });
    }
    delete(req, res) {
        let Canciones2 = [];
        let count = 0;
        for (let i = 0; i < Canciones.length; i++) {
            if (Canciones[i].nombre == req.params.id) {
                count++;
            }
            else {
                Canciones2.push(Canciones[i]);
            }
        }
        if (count > 0) {
            Canciones = Canciones2;
            res.status(204).json({Response: '204'});
        }
        else {
            res.status(404).json({Response: '404 Not Found'});
        }
    }
    update(req, res) {
        let Canciones2 = [];
        let count = 0;
        for (let i = 0; i < Canciones.length; i++) {
            if (Canciones[i].nombre == req.params.id) {
                count++;
            }
            else {
                Canciones2.push(Canciones[i]);
            }
        }
        if (count > 0) {
            Canciones = Canciones2;
            Canciones.push((req.body));
            res.status(204).json({ Response: 'Updated' });
        }
        else {
            res.status(404).json({ Response: '404 Not Found' });
        }
    }
}
const songsController = new SongsController();
exports.default = songsController;
