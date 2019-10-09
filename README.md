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
