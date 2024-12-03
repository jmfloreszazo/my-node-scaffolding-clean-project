# NodeJS Scaffolding for Clean Architecture

Este proyecto es una plantilla para aplicaciones Node.js utilizando una arquitectura limpia. La arquitectura limpia se enfoca en separar las responsabilidades en diferentes capas, facilitando el mantenimiento y la escalabilidad del código.

## Arquitectura

Estructura de este proyecto:

```sh

├── src/
│   ├── application/         # Casos de uso y lógica de aplicación
│   │   ├── use-cases/       # Casos de uso específicos de la aplicación
│   │   └── services/        # Servicios y lógica de aplicación
│   ├── domain/              # Entidades y lógica de dominio
│   │   ├── entities/        # Entidades del dominio
│   │   └── interfaces/      # Interfaces de repositorios y otros contratos
│   ├── infrastructure/      # Implementaciones técnicas y adaptadores
│   │   ├── database/        # Configuración y acceso a la base de datos
│   │   ├── http/            # Configuración de HTTP y clientes
│   │   ├── config/          # Configuraciones generales
│   │   └── repositories/    # Implementaciones de repositorios
│   ├── interfaces/          # Interfaces de usuario y controladores
│   │   ├── controllers/     # Controladores de la aplicación
│   │   ├── routes/          # Definición de rutas
│   │   ├── controllers/     # Controladores de la aplicación
│   │   ├── dto/             # Data Transfer Objects
│   │   ├─ routes/           # Definición de rutas
│   │   ├─ schemas/          # Esquemas de validación
│   ├── swagger.ts           # Configuración de Swagger
│   ├── shared/              # Código compartido y utilidades
│   │   ├── utils/           # Utilidades y funciones auxiliares
│   │   └── middlewares/     # Middlewares de la aplicación
│   └── index.ts             # Punto de entrada de la aplicación
├── tests/                   # Pruebas unitarias e integración
│   ├── unit/                # Pruebas unitarias
│   └── integration/         # Pruebas de integración
├── package.json             # Configuración de npm y dependencias
├── tsconfig.json            # Configuración de TypeScript
├── jest.config.js           # Configuración de Jest para pruebas
├── ...                      # Otros archivos y directorios 
└── README.md                # Documentación del proyecto
```

### Recomendaciones:

- Si optas por un enfoque **multi-repo**, se recomienda crear paquetes npm para recursos comunes de arquitectura. Esto facilita la reutilización y el mantenimiento de componentes compartidos entre diferentes microservicios.
- Si estás trabajando en **mono-repo** o en una pequeña empresa, puedes pasar por alto la creación de paquetes npm para recursos comunes. Sin embargo, en una gran empresa, querrás tener las cosas estandarizadas y organizadas, por lo que la creación de paquetes npm para recursos comunes sigue siendo una buena práctica.
- Si estas en una arquitectura **CQRS** para clean architecture, puedes agregar una carpeta llamada queries y otra llamada commands, para separar las responsabilidades de las consultas y los comandos:

```sh
├── src/
│   ├── application/         # Casos de uso y lógica de aplicación
│   │   ├── commands/        # Comandos específicos de la aplicación
│   │   │   ├── handlers/    # Manejadores de comandos
│   │   │   └── dtos/        # Data Transfer Objects para comandos
│   │   ├── queries/         # Consultas específicas de la aplicación
│   │   │   ├── handlers/    # Manejadores de consultas
│   │   │   └── dtos/        # Data Transfer Objects para consultas
│   │   └── services/        # Servicios y lógica de aplicación
│   ├── domain/              # Entidades y lógica de dominio
│   │   ├── entities/        # Entidades del dominio
│   │   └── interfaces/      # Interfaces de repositorios y otros contratos
│   ├── infrastructure/      # Implementaciones técnicas y adaptadores
│   │   ├── database/        # Configuración y acceso a la base de datos
│   │   ├── http/            # Configuración de HTTP y clientes
│   │   ├── config/          # Configuraciones generales
│   │   └── repositories/    # Implementaciones de repositorios
│   ├── interfaces/          # Interfaces de usuario y controladores
│   │   ├── controllers/     # Controladores de la aplicación
│   │   ├── routes/          # Definición de rutas
│   │   ├── dto/             # Data Transfer Objects
│   │   ├── schemas/         # Esquemas de validación
│   └── swagger.ts           # Configuración de Swagger
│   ├── shared/              # Código compartido y utilidades
│   │   ├── utils/           # Utilidades y funciones auxiliares
│   │   └── middlewares/     # Middlewares de la aplicación, como la autenticación
│   └── index.ts             # Punto de entrada de la aplicación
├── tests/                   # Pruebas unitarias e integración
│   ├── unit/                # Pruebas unitarias
│   └── integration/         # Pruebas de integración
├── package.json             # Configuración de npm y dependencias
├── tsconfig.json            # Configuración de TypeScript
├── jest.config.js           # Configuración de Jest para pruebas
├── ...                      # Otros archivos y directorios 
└── README.md                # Documentación del proyecto
```

# Scripts de npm  
  
A continuación se detallan los scripts disponibles en el archivo `package.json` y su propósito:  
  
- `npm run build`: Compila el proyecto de TypeScript a JavaScript usando el compilador de TypeScript (`tsc`).  
- `npm run dev`: Inicia la aplicación en modo desarrollo utilizando `nodemon` para recargar automáticamente cuando hay cambios en los archivos de código fuente.  
- `npm run format`: Formatea el código usando Prettier en todos los archivos del proyecto.  
- `npm run lint`: Ejecuta ESLint para encontrar problemas en el código fuente (`.ts`).  
- `npm run lint:fix`: Ejecuta ESLint y corrige automáticamente los problemas encontrados en los archivos de código fuente (`.ts`).  
- `npm run lint-staged`: Ejecuta ESLint y Prettier en los archivos que están preparados (staged) para el commit.  
- `npm run prepare`: Configura Husky para los hooks de Git.  
- `npm run start`: Inicia la aplicación ejecutando el archivo compilado `index.ts` en la carpeta `build`.  
- `npm run start:mongodb`: Inicia una instancia de MongoDB usando Docker. Esto lo puedes mover a docker compose si lo prefieres, así como una REDIS, etc.
- `npm run stop:mongodb`: Detiene la instancia de MongoDB que fue iniciada con Docker.  
- `npm run test`: Ejecuta las pruebas unitarias e integración usando Jest.  
- `npm run test:coverage`: Ejecuta las pruebas y genera un reporte de cobertura de código usando Jest.  
  
## Configuración de lint-staged  
  
El objeto `lint-staged` se usa en conjunto con Husky para ejecutar scripts específicos en los archivos que están preparados (staged) para el commit. En este caso, se configura para que ejecute los siguientes scripts en los archivos TypeScript (`.ts`):  
  
- `npm run lint`: Ejecuta ESLint para encontrar problemas en el código.  
- `npm run format`: Formatea el código usando Prettier.  
  
### Uso de Husky  
  
Husky se utiliza para configurar hooks de Git, en este caso el hook pre-commit. Esto asegura que antes de realizar un commit, se ejecuten los scripts configurados en `lint-staged`, ayudando a mantener la calidad del código y el formato consistente.  
  
Para instalar y configurar Husky, se usa el script `prepare`:  
  
- `npm run prepare`: Configura Husky para los hooks de Git.  
  
Con esta configuración, cada vez que intentes hacer un commit, Husky ejecutará los scripts definidos en `lint-staged` para los archivos preparados (staged), asegurando que el código que se va a commitear esté libre de errores de lint y esté correctamente formateado. 

# Ejecutar el proyecto

## En local

1. `npm install`
2. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
    ```plaintext
    HOST=localhost
    PORT=3000
    API_DOCS_ROUTE=/swagger
    MONGODB_URI=mongodb://localhost:27017/mydatabase
    ```
3. `npm run start:mongodb`
4. `npm run dev`
5. `npm run stop:mongodb`, cuando hayas terminado de trabajar con la base de datos.

### Configuración de HTTPS

Para ejecutar el proyecto con HTTPS, asegúrate de tener los certificados SSL en la carpeta `certs` en la raíz del proyecto:

- `certs/key.pem`
- `certs/cert.pem`

pasos para crear los certificados SSL:

```bash
openssl req -nodes -new -x509 -keyout certs/key.pem -out certs/cert.pem
```

## Acceder a la Documentación Swagger
 
Una vez que la aplicación esté en ejecución, puedes acceder a la documentación Swagger desde tu navegador. Abre tu navegador y dirígete a: `http://localhost:3000/swagger` o `https://localhost:3000/swagger`

## Ejecutar un test concreto para debug

Dede VS Code y la opcion  Run and Debug, he creado un laucher llamdo: `Debug Current Test File` donde te pedirá la ruta parcial y el archivo, por ejemplo: `tests/unit/your-test.test.ts`

## Ejemplos de datos para tus pruebas


```json
[
    {
        "id": "1",
        "name": "Smartphone X200",
        "brand": "TechCorp",
        "releaseDate": "2023-01-15T00:00:00.000Z",
        "description": "A high-end smartphone with a powerful processor and advanced camera features."
    },
    {
        "id": "2",
        "name": "Laptop Pro 15",
        "brand": "CompuWorld",
        "releaseDate": "2022-11-10T00:00:00.000Z",
        "description": "A professional-grade laptop with a 15-inch display and high performance."
    },
    {
        "id": "3",
        "name": "Smartwatch S3",
        "brand": "GadgetCo",
        "releaseDate": "2023-03-22T00:00:00.000Z",
        "description": "A smartwatch with fitness tracking and health monitoring features."
    },
    {
        "id": "4",
        "name": "Tablet Max 10",
        "brand": "TechCorp",
        "releaseDate": "2022-09-05T00:00:00.000Z",
        "description": "A 10-inch tablet with a high-resolution display and long battery life."
    },
    {
        "id": "5",
        "name": "Wireless Earbuds A1",
        "brand": "SoundTech",
        "releaseDate": "2023-02-14T00:00:00.000Z",
        "description": "Wireless earbuds with noise cancellation and high-quality sound."
    },
    {
        "id": "6",
        "name": "Gaming Console Z",
        "brand": "PlayMax",
        "releaseDate": "2022-12-01T00:00:00.000Z",
        "description": "A gaming console with 4K resolution and a wide range of games."
    },
    {
        "id": "7",
        "name": "Smart Home Hub",
        "brand": "HomeTech",
        "releaseDate": "2023-01-30T00:00:00.000Z",
        "description": "A smart home hub that connects and controls various smart devices."
    },
    {
        "id": "8",
        "name": "VR Headset V2",
        "brand": "VirtualX",
        "releaseDate": "2023-05-10T00:00:00.000Z",
        "description": "A VR headset with immersive virtual reality experiences and high resolution."
    },
    {
        "id": "9",
        "name": "E-Reader Lite",
        "brand": "ReadOn",
        "releaseDate": "2022-10-20T00:00:00.000Z",
        "description": "A lightweight e-reader with a glare-free screen and long battery life."
    },
    {
        "id": "10",
        "name": "Drone Pro",
        "brand": "FlyHigh",
        "releaseDate": "2023-04-18T00:00:00.000Z",
        "description": "A professional drone with high-definition camera and long flight time."
    }
]
```

# Dependencias de npm

## Dependencias de Producción  

- `@fastify/swagger`: Genera documentación Swagger para Fastify.  
- `@fastify/swagger-ui`: Proporciona una interfaz de usuario para la documentación Swagger.  
- `@types/mongodb-memory-server`: Tipos para `mongodb-memory-server`.  
- `class-validator`: Validación de clases y objetos.  
- `dotenv`: Carga variables de entorno desde un archivo `.env`.  
- `fastify`: Framework web rápido y de bajo consumo.  
- `fastify-swagger`: Plugin para integrar Swagger con Fastify.  
- `jsonwebtoken`: Implementación de JSON Web Tokens.  
- `mongodb-memory-server`: Servidor en memoria para MongoDB, útil para pruebas.
- `mongoose`: ODM para MongoDB.  
- `reflect-metadata`: Añade soporte para metadatos de reflexión.  
- `winston`: Biblioteca de logging.  
  
## Dependencias de Desarrollo  

- `@types/jest`: Tipos para Jest.  
- `@types/jsonwebtoken`: Tipos para JSON Web Tokens.  
- `@types/node`: Tipos para Node.js.  
- `eslint`: Linter para JavaScript y TypeScript.  
- `husky`: Herramienta para gestionar hooks de Git.  
- `jest`: Framework de pruebas.  
- `nodemon`: Herramienta para reiniciar automáticamente la aplicación en modo desarrollo.  
- `prettier`: Formateador de código.  
- `supertest`: Herramienta para realizar pruebas HTTP.  
- `ts-jest`: Preset de Jest para TypeScript.  
- `ts-node`: Ejecuta archivos TypeScript directamente.  
- `typescript`: Compilador TypeScript.  
- `typescript-eslint`: Conjunto de herramientas ESLint para TypeScript. 

# Completar el Proyecto con Tecnologías Adicionales  
  
Para completar el proyecto, puedes añadir varias tecnologías que mejorarán su funcionalidad y escalabilidad. A continuación, se detallan algunas de estas tecnologías y cómo puedes integrarlas en tu proyecto.  
  
## 1. OpenTelemetry para Trazabilidad  
  
OpenTelemetry es una colección de herramientas, API y SDK que puedes usar para instrumentar, generar, recopilar y exportar datos de telemetría (métricas, logs y trazas) para analizar y monitorear tu software.  
  
### Ejemplo de Integración  
  
```typescript  
// src/infrastructure/logging/logger.ts  
import { NodeTracerProvider } from '@opentelemetry/node';  
import { SimpleSpanProcessor } from '@opentelemetry/tracing';  
import { ConsoleSpanExporter } from '@opentelemetry/tracing';  
  
const provider = new NodeTracerProvider();  
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));  
provider.register();  
  
export default provider.getTracer('default');  
```

## 2. Redis para Caching
 
Redis es una base de datos en memoria que puedes usar para mejorar el rendimiento de tu aplicación mediante el almacenamiento en caché de datos frecuentemente accedidos.

### Ejemplo de Integración
 
```typescript 
// src/infrastructure/cache/redisCache.ts  
import Redis from 'ioredis';  
  
const redis = new Redis({  
  host: process.env.REDIS_HOST,  
  port: Number(process.env.REDIS_PORT),  
  password: process.env.REDIS_PASSWORD,  
});  
  
export default redis;  
```
## 3. Memoria Caché Local
 
También puedes usar una memoria caché en local para almacenamiento temporal de datos.

### Ejemplo de Integración
 

```typescript 
// src/infrastructure/cache/memoryCache.ts  
import NodeCache from 'node-cache';  
  
const memoryCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });  
  
export default memoryCache;  
```

## 4. Autorización con Middleware
 
Puedes añadir autorización a tu aplicación utilizando middleware en Node.js.

### Ejemplo de Integración
 

```typescript 
// src/middleware/auth.ts  
import { Request, Response, NextFunction } from 'express';  
import jwt from 'jsonwebtoken';  
  
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {  
  const token = req.headers['authorization'];  
  if (!token) {  
    return res.status(403).send('No token provided.');  
  }  
  
  jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {  
    if (err) {  
      return res.status(500).send('Failed to authenticate token.');  
    }  
      
    req.user = decoded;  
    next();  
  });  
};  
  
export default authMiddleware;  

```
## 5. Keycloak para Autenticación y Autorización
 
Keycloak es una herramienta de código abierto que permite añadir autenticación y autorización a tus aplicaciones. Puedes integrarlo fácilmente usando Docker Compose.

### Ejemplo de Integración con Docker Compose
 
Primero, crea un archivo docker-compose.yml en la raíz de tu proyecto:
```yaml

version: '3'  
services:  
  keycloak:  
    image: jboss/keycloak  
    environment:  
      DB_VENDOR: h2  
      KEYCLOAK_USER: admin  
      KEYCLOAK_PASSWORD: admin  
    ports:  
      - "8080:8080"  
  redis:  
    image: redis:latest  
    ports:  
      - "6379:6379"  
 
```	
Para iniciar los servicios, ejecuta:

```bash
docker-compose up -d  
```	 

### Configuración en tu Aplicación
 
Después de iniciar Keycloak, es instalar:

```bash
npm install fastify keycloak-connect @fastify/session @fastify/cookie  
```	

Puedes configurarlo en tu aplicación utilizando la biblioteca keycloak-connect:

```typescript 
import Fastify from 'fastify';  
import Keycloak from 'keycloak-connect';  
import fastifySession from '@fastify/session';  
import fastifyCookie from '@fastify/cookie';  
  
const fastify = Fastify({ logger: true });  
  
// Configuración de la sesión y cookies para Fastify  
fastify.register(fastifyCookie);  
fastify.register(fastifySession, {  
  secret: 'some secret',  
  saveUninitialized: false,  
  resave: false,  
  cookie: { secure: false },  
});  
  
// Configuración de Keycloak  
const memoryStore = new fastifySession.MemoryStore();  
const keycloak = new Keycloak({ store: memoryStore });  
  
// Middleware de Keycloak  
fastify.addHook('onRequest', (request, reply, done) => {  
  keycloak.middleware()(request.raw, reply.raw, done);  
});  
  
// Ruta protegida  
fastify.get('/protected', { preHandler: keycloak.protect() }, (request, reply) => {  
  reply.send('This is a protected route');  
});  
  
// Inicia el servidor  
fastify.listen(3000, (err, address) => {  
  if (err) {  
    fastify.log.error(err);  
    process.exit(1);  
  }  
  fastify.log.info(`Server is running on ${address}`);  
});  
```

## 6. Eventos y Mensajes
 
Puedes usar bibliotecas como bull para manejar colas de trabajo y mensajes en tu aplicación.

### Ejemplo de Integración
 
Primero, instala la biblioteca bull:

```bash
npm install bull  
```
 
Luego, crea una cola y un procesador de trabajos:

```typescript
// src/queues/jobQueue.ts  
import Bull from 'bull';  
  
const jobQueue = new Bull('jobQueue', {  
  redis: {  
    host: process.env.REDIS_HOST,  
    port: Number(process.env.REDIS_PORT),  
    password: process.env.REDIS_PASSWORD,  
  },  
});  
  
jobQueue.process(async (job) => {  
  console.log('Processing job:', job.data);  
  // Realiza el trabajo aquí  
});  
  
export default jobQueue;  
```
 
Para añadir trabajos a la cola:

```typescript	
// src/routes/jobRoutes.ts  
import express from 'express';  
import jobQueue from '../queues/jobQueue';  
  
const router = express.Router();  
  
router.post('/add-job', async (req, res) => {  
  const { jobData } = req.body;  
  await jobQueue.add(jobData);  
  res.send('Job added to the queue');  
});  
  
export default router;  
```