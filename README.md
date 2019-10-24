# repoCrudServer
Archivos de API para proyecto de CRUD

Estructura del JSON de entrada para POST y PUT:

{
    "nombre": "",
    "artista": "",
    "album": "",
    "genero": "",
    "duracion": ""
}

Ruta a consumir:

http://localhost:3000/api/v1/canciones/

Al final de la ruta agregar el valor del nombre de la cancion a eliminar, buscar o actualizar para los métodos DELETE, GET y UPDATE 
respectivamente.

El método GET se puede utilizar con el valor al final para buscar específico y sin nigún parámetro para enlistar todos los elementos.

El unit testing del código está completado, con porcentaje del 100% del código cubierto como se puede ver a continuación:

 /POST song
POST /api/v1/canciones/ 201 1007.997 ms - 131
    √ it should POST a song (1025ms)

  /POST nosong
POST /api/v1/canciones/ 404 2.197 ms - 28
    √ it should not POST a song

  /GET songs
    √ it should GET all the songs

  /GET/:id song
GET /api/v1/canciones/ 200 9.176 ms - 673
    √ it should GET a song by the given id

  /GET/:id nosong
GET /api/v1/canciones/5db086172943c633e8abb698 200 3.084 ms - 0
    √ it should not GET a song by the given id
GET /api/v1/canciones/hola 404 1.516 ms - 28

  /PUT/:id song
    √ it should UPDATE a song given the id

  /PUT/:id nosong
PUT /api/v1/canciones/5db1b9d74e688540309fe0ee 204 4.825 ms - -
    √ it should not UPDATE a song given the unexisting id
PUT /api/v1/canciones/hola 404 0.477 ms - 28

  /DELETE/:id nosong
    √ it should not DELETE a song given the id
DELETE /api/v1/canciones/hola 404 1.066 ms - 28

  /DELETE/:id song
    √ it should DELETE a song given the id

  Index controller
DELETE /api/v1/canciones/5db1bce8d9fc9a536096e10d 204 2.172 ms - -
    √ Use IC method
GET / 200 0.196 ms - 5

10 passing (132ms)
  10 passing (1s)

--------------------------|----------|----------|----------|----------|-------------------|
File                      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------|----------|----------|----------|----------|-------------------|
All files                 |      100 |      100 |      100 |      100 |                   |
  index.js                |      100 |      100 |      100 |      100 |                   |
 server/build/controllers |      100 |      100 |      100 |      100 |                   |
  indexController.js      |      100 |      100 |      100 |      100 |                   |
  songsController.js      |      100 |      100 |      100 |      100 |                   |
 server/build/models      |      100 |      100 |      100 |      100 |                   |
  song.js                 |      100 |      100 |      100 |      100 |                   |
 server/build/routes      |      100 |      100 |      100 |      100 |                   |
  indexRoutes.js          |      100 |      100 |      100 |      100 |                   |
  songsRoutes.js          |      100 |      100 |      100 |      100 |                   |
 server/tests             |      100 |      100 |      100 |      100 |                   |
  songsController.spec.js |      100 |      100 |      100 |      100 |                   |
--------------------------|----------|----------|----------|----------|-------------------|

En los casos se probó los escenarios de error y éxito de cada una de las funciones de PUT:id, GET, GET:id, DELETE:id, dando el status correcto para cada caso como se puede comprobar en los resultados anteriores.
