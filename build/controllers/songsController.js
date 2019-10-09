"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Canciones = [];
class SongsController {
    list(req, res) {
        if (Canciones.length > 0) {
            res.json({ Canciones });
            res.json({ Response: '200' });
        }
        else {
            res.json({ Response: '404 Not found' });
        }
    }
    listone(req, res) {
        let Cancion = "";
        for (let i = 0; i < Canciones.length; i++) {
            if (Canciones[i].nombre == req.params.id) {
                Cancion += JSON.stringify(Canciones[i]) + ',';
            }
        }
        if (Cancion == "") {
            res.json({ Response: '404 Not found' });
        }
        else {
            res.json({ Cancion });
            res.json({ Response: '200' });
        }
    }
    create(req, res) {
        console.log(req.body);
        Canciones.push((req.body));
        console.log(Canciones);
        res.json({ Response: '201' });
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
            res.json({ Response: '204' });
        }
        else {
            res.json({ Response: '404 Not Found' });
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
            console.log(req.body);
            Canciones.push((req.body));
            console.log(Canciones);
            res.json({ Response: '204' });
        }
        else {
            res.json({ Response: '404 Not Found' });
        }
    }
}
const songsController = new SongsController();
exports.default = songsController;
