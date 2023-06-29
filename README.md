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

## ORM

💡Un ORM es un modelo de programación que permite mapear las estructuras de una base de datos relacionales.
Al abstraer este tipo de programación, delegamos su implementación al backend, es decir, le añadimos una de responsabilidad a la capa transaccional del servidor:
.
✨Los beneficios son los siguientes:

Acciones como CRUD (Create, Read, Update, Delete) son administradas mediante ORM.
La implementación de seeds o semillas, nos permiten recuperar, mediante código, la estructura de una BD.
.
Una de las bases teóricas para entender este modelo es mediante el conocimiento de DAO (Data Access Object) y DTO (Data Transfer Object), los cuales nos permiten desestructurar un ORM en módulos de abstracción para acceder a la DB y transferir datos desde la misma DB, respectivamente hablando.
.
🙃Los contras sería:

Delegación de responsabilidades al server
Descentralización de trabajo, directa, de una BD.

## Continue learning :)

```
docker-compose up -d postgres
docker-compose up -d pgadmin
docker ps
docker inspect 00d858386a0e

docker-compose up -d mysql

npm run dev
```

## Migraciones

Es un control de cambio (control de versiones), se manejan desde el codigo. 

```
npm run migrations:generate change-user-id
nrpm run migrations:run
```
