"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var {Song} = require('../models/song.js');
let Canciones = [];
class SongsController {
    list(req, res) {
        Song.find((err, docs) => {
            if (!err) { res.status(200).send(docs); }
            else { res.status(404).json({ Response: '404 Not found' }); }
        });
    }
    listone(req, res) {
        Song.findById(req.params.id, (err, doc) => {
            if (!err) { res.status(200).send(doc); }
            else { res.status(404).json({ Response: '404 Not found' }); }
        });
    }
    create(req, res) {
        var sng = new Song({
            nombre: req.body.nombre,
            artista: req.body.artista,
            album: req.body.album,
            genero: req.body.genero,
            duracion: req.body.duracion,
        });
        sng.save((err, doc) => {
            if (!err) { res.status(201).send(doc); }
            else { res.status(404).json({ Response: '404 Not Found' }); }
        });
    }
    delete(req, res) {
        Song.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.status(204).send(doc); }
            else { res.status(404).json({ Response: '404 Not Found' });}
        });
    }
    update(req, res) {
        var sng = {
            nombre: req.body.nombre,
            artista: req.body.artista,
            album: req.body.album,
            genero: req.body.genero,
            duracion: req.body.duracion,
        };
        Song.findByIdAndUpdate(req.params.id, { $set: sng }, { new: true }, (err, doc) => {
            if (!err) { res.status(204).send(doc); }
            else { res.status(404).json({ Response: '404 Not Found' }); }
        });
    }
}
const songsController = new SongsController();
exports.default = songsController;
