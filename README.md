# repoCrudServer
Archivos de API para proyecto de CRUD en ambiente local (Arreglo de datos)

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

  /GET nosongs
    √ it should try to GET all the songs and return empty array
GET /api/v1/canciones/ 404 2.740 ms - 2

  /POST song
    √ it should POST a song
POST /api/v1/canciones/ 201 11.686 ms - 18

  /GET songs
    √ it should GET all the songs
GET /api/v1/canciones/ 200 0.378 ms - 92

  /GET/:id song
    √ it should GET a song by the given id
GET /api/v1/canciones/a 200 0.995 ms - 90

  /GET/:id nosong
    √ it should not GET a song by the given id
GET /api/v1/canciones/b 404 0.318 ms - 28

  /PUT/:id song
    √ it should UPDATE a song given the id
PUT /api/v1/canciones/a 204 0.498 ms - -

  /PUT/:id nosong
    √ it should not UPDATE a song given the unexisting id
PUT /api/v1/canciones/c 404 0.360 ms - 28

  /DELETE/:id nosong
    √ it should not DELETE a song given the id
DELETE /api/v1/canciones/c 404 0.338 ms - 28

  /DELETE/:id song
    √ it should DELETE a song given the id
DELETE /api/v1/canciones/a 204 0.204 ms - -

  /POST nosong
    √ it should not POST a song
POST /api/v1/canciones/ 201 11.686 ms - 18


  10 passing (132ms)

--------------------------|----------|----------|----------|----------|-------------------|
File                      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------|----------|----------|----------|----------|-------------------|
All files                 |      100 |      100 |      100 |      100 |                   |
 build                    |      100 |      100 |      100 |      100 |                   |
  index.js                |      100 |      100 |      100 |      100 |                   |
 build/controllers        |      100 |      100 |      100 |      100 |                   |
  indexController.js      |      100 |      100 |      100 |      100 |                   |
  songsController.js      |      100 |      100 |      100 |      100 |                   |
 build/routes             |      100 |      100 |      100 |      100 |                   |
  indexRoutes.js          |      100 |      100 |      100 |      100 |                   |
  songsRoutes.js          |      100 |      100 |      100 |      100 |                   |
 tests                    |      100 |      100 |      100 |      100 |                   |
  songsController.spec.js |      100 |      100 |      100 |      100 |                   |
--------------------------|----------|----------|----------|----------|-------------------|

En los casos se probó los escenarios de error y éxito de cada una de las funciones de PUT:id, GET, GET:id, DELETE:id, dando el status correcto para cada caso como se puede comprobar en los resultados anteriores.
