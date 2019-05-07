# API Rest Peliculas

## Arquitectura

La arquitectura es de 3 capas:

- Una capa que se comunica con el cliente (***server.js***)
- Una capa de lógica (directorio ***controllers***)
- Una capa de interacción con la base de datos (directorio ***models***)

## Run app (Entorno Local)

### Configuración de Base de Datos

Debe haber una instancia de mysql corriendo en el host con un usuario root y una password. La password se debe settear como variable de entorno haciendo **export mysql_password=(root password)** y después se corre el comando **npm run initialize-database**

### Iniciar aplicación

La app se inicia con el comando **npm run start** y corre en el puerto 3000 (http://localhost:3000)

## Tests
