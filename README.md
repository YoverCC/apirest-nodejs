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

Request -> Middleware -> Response

Usos:

- Funciona como pipes.
- Validar datos.
- Capturar errores.
- Validar permisos.
- Controlar accesos.

**The Clean Architecture**
Entidades -> Servicios -> Controladores (routers, middlewares) -> Equipos.

**Recomendaciones para producción**

- CORS
- Https
- Procesos de Build
- Remover logs. (Datalogs es buena opción)
- Seguridad (Helmet - ejemplo de un middleware que controla grandes puntos de seguridad)
- Testing - Pruebas unitarias

# Curso postgresql con nodejs

## Docker

Los contenedores son "stales", es decir no tienen estados, cada vez que se levanta correra el servicio pero si lo bajas se borraran los datos. Las bases de datos si tienen estado (almacenan registro). Para ello se crea un volumen en el .yml.

Levantar el servicio
```
docker-compose up -d postgres
```

Conectarte al docker (al contenedor)
```
docker-compose exec postgres bash
```

Salir del docker
```
exit
```

Revisar mayor detalle de los contenedores
```
docker-compose ps
docker ps
docker inspect f936c51679e6
```

## Postgresql

Conectarte a la base de datos
```
psql -h localhost -d my_store -U jarvis
```

Mostrar las entidades (tablas)
```
\d+
```

Salir de la bd
```
\q
```

Se puede usar una interfaz visual (pgadmin) en el que te puedes conectar a la BD y ejecutar query's SQL.

## LIBS

Se encarga de conexion a terceros. Es recomendable manejar las conexiones como tipo POOL, dado que estar conectandose por cada llamado puede consumir tiempos innecesarios.

Es una buena practica poner los datos de las conexiones en variables de ambiente (de entorno).
