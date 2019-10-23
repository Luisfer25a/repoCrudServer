let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../build/index.js');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET nosongs', () => {
    it('it should try to GET all the songs and return empty array', () => {
          chai.request(server)
          .get('/api/v1/canciones/')
          .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
          });
    });
  });

describe('/POST song', () => {
    it('it should POST a song', () => {
            let song  = {
                nombre: "a",
                artista: "Kiss",
                album: "kiss1",
                genero: "Rock clásico",
                duracion: "5:03"
            }
            chai.request(server)
            .post('/api/v1/canciones/')
            .send(song)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
            });
    });
});

describe('/GET songs', () => {
    it('it should GET all the songs', () => {
          chai.request(server)
          .get('/api/v1/canciones/')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
          });
    });
  });  
  describe('/GET/:id song', () => {
    it('it should GET a song by the given id', () => {
        let song = { 
            nombre: "a",
            artista: "Kiss",
            album: "kiss1",
            genero: "Rock clásico",
            duracion: "5:03" 
        };
        
        chai.request(server)
          .get('/api/v1/canciones/' + song.nombre)
          .send(song)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('artista');
                res.body.should.have.property('album');
                res.body.should.have.property('genero');
                res.body.should.have.property('duracion');
                res.body.should.have.property('nombre').eql(song.nombre);
          });
        

    });
});

describe('/GET/:id nosong', () => {
    it('it should not GET a song by the given id', () => {
        let song = { 
            nombre: "b",
            artista: "Kiss",
            album: "kiss1",
            genero: "Rock clásico",
            duracion: "5:03" 
        };
        
        chai.request(server)
          .get('/api/v1/canciones/' + song.nombre)
          .send(song)
          .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
          });
    });
});


describe('/PUT/:id song', () => {
    it('it should UPDATE a song given the id', () => {
        let song = {
        nombre: "a",
        artista: "Kiss",
        album: "kiss1",
        genero: "Rock clásico",
        duracion: "5:03" 
        } 
              chai.request(server)
              .put('/api/v1/canciones/' + song.nombre)
              .send({nombre: "a",
              artista: "AC/DC",
              album: "HellsBells",
              genero: "Rock clásico",
              duracion: "5:08"})
              .end((err, res) => {
                    res.should.have.status(204);
                    res.body.should.be.a('object');
              });
    });
});

describe('/PUT/:id nosong', () => {
    it('it should not UPDATE a song given the unexisting id', () => {
        let song = {
        nombre: "c",
        artista: "Kiss",
        album: "kiss1",
        genero: "Rock clásico",
        duracion: "5:03" 
        } 
              chai.request(server)
              .put('/api/v1/canciones/' + song.nombre)
              .send({nombre: "a",
              artista: "AC/DC",
              album: "HellsBells",
              genero: "Rock clásico",
              duracion: "5:08"})
              .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
              });
    });
});

describe('/DELETE/:id nosong', () => {
    it('it should not DELETE a song given the id', () => {
        let song = {
        nombre: "c",
        artista: "Kiss",
        album: "kiss1",
        genero: "Rock clásico",
        duracion: "5:03"
        }
              chai.request(server)
              .delete('/api/v1/canciones/' + song.nombre)
              .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
              });
    });
});
describe('/DELETE/:id song', () => {
    it('it should DELETE a song given the id', () => {
        let song = {
            nombre: "a",
            artista: "AC/DC",
            album: "HellsBells",
            genero: "Rock clásico",
            duracion: "5:08"
        }
              chai.request(server)
              .delete('/api/v1/canciones/' + song.nombre)
              .end((err, res) => {
                    res.should.have.status(204);
                    res.body.should.be.a('object');
              });
    });
});
describe('Index controller', () => {
    it('Use IC method', () => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
        });
  });
});


