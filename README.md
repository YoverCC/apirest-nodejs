# Curso apirest-nodejs

## Notas del curso:

* Todos los endpoints especificos deben ir antes de los dinamicos.
* En equipos de desarrollo pueden tener convenciones en la nomenclartura de las rutas, esto puede ser por ejemplo en cammel case (productsRouter.js) o como extension (products.router.js). Lo importante es tener claro la convencion para el manejo de rutas y cumplir el Principio de una Sola Responsabilidad (SRP). Lo importante es que el equipo defina la regla.
* CRUD: acrónimo de Create (Crear), Read (Leer), Update (Actualizar) y Delete (Borrar).
* Status code: son un estandar que permiten saber que paso con la solicitud. (https://http.cat/). (https://developer.mozilla.org/en-US/docs/Web/HTTP).
  - 404: Not found.
  - 500: Cuando el servidor por algun lado se rompio. Se deben evitar.


## Notas utiles (comentarios en proyecto)

**Express.Router**
Crea un controlador(handler) de rutas modulares y montables. Una instancia de Router es un sistema de enrutamiento y middleware completo, por esa razón lo podemos tomar como si fuera una mini app.

Cada modulo de nuestras rutas es una mini aplicación en la que creamos sus rutas independientes y podemos incluirle middlewares, que se ejecutarán cuando se coincida con el path.

**Qué es un middleware?**
Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.
