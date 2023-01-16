# FRONT

## Instrucciones de ejecución

Para ejecutar correctamente el front-end de la API, tiene dos opciones:

### Opción 1: Ejecución con Docker Compose

1. Asegúrese de tener Docker y Docker Compose instalados en su sistema.
2. En la raíz del proyecto, ejecute el comando `docker-compose up`.

### Opción 2: Instalación de dependencias y ejecución con npm

1. Asegúrese de tener Node.js y npm instalados en su sistema.
2. En la raíz del proyecto, ejecute el comando `npm i` para instalar las dependencias.
3. Una vez finalizada la instalación, ejecute el comando `npm run start` para iniciar el proyecto.

## Notas importantes

-  El puerto predeterminado en `docker-compose` es el 4000, a diferencia del back-end que se ejecuta en el puerto 3000.
-  Se recomienda ejecutar primero el back-end antes de iniciar el front-end.
