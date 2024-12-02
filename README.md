# my-node-scaffolding-clean-project

Este proyecto es una plantilla para aplicaciones Node.js utilizando una arquitectura limpia. La arquitectura limpia se enfoca en separar las responsabilidades en diferentes capas, facilitando el mantenimiento y la escalabilidad del código.

## Arquitectura

explcia algo e codigo como hacerlo

> Nota: Si estás desarrollando una arquitectura de microservicios, puedes optar por un enfoque multi-repo (un repositorio por microservicio) o un enfoque mono-repo (todos los microservicios en un solo repositorio). Adapta la estructura y los comandos según tus necesidades.

```sh

├── src/
│   ├── application/         # Casos de uso y lógica de aplicación
│   │   ├── use-cases/       # Casos de uso específicos de la aplicación
│   │   └── services/        # Servicios y lógica de aplicación
│   ├── domain/              # Entidades y lógica de dominio
│   │   ├── entities/        # Entidades del dominio
│   │   └── interfaces/      # Interfaces de repositorios y otros contratos
│   ├��─ infrastructure/      # Implementaciones técnicas y adaptadores
│   │   ├── database/        # Configuración y acceso a la base de datos
│   │   ├── http/            # Configuración de HTTP y clientes
│   │   ├── config/          # Configuraciones generales
│   │   └── repositories/    # Implementaciones de repositorios
│   ├── interfaces/          # Interfaces de usuario y controladores
│   │   ├── controllers/     # Controladores de la aplicación
│   │   ├── routes/          # Definición de rutas
│   │   ├── controllers/     # Controladores de la aplicación
│   │   ├── dto/             # Data Transfer Objects
│   │   ├─ routes/          # Definición de rutas
│   │   ├─ schemas/         # Esquemas de validación
│   ├── swagger.ts       # Configuración de Swagger
│   ├── shared/              # Código compartido y utilidades
│   │   ├── utils/           # Utilidades y funciones auxiliares
│   │   └── middlewares/     # Middlewares de la aplicación
│   └── index.ts             # Punto de entrada de la aplicación
├── tests/                   # Pruebas unitarias e integración
│   ├── unit/                # Pruebas unitarias
│   └── integration/         # Pruebas de integración
├── [package.json](http://_vscodecontentref_/1)             # Configuración de npm y dependencias
├── [tsconfig.json](http://_vscodecontentref_/2)            # Configuración de TypeScript
├── jest.config.js           # Configuración de Jest para pruebas
└── [README.md](http://_vscodecontentref_/3)                # Documentación del proyecto


├── src/
│   ├── application/         # Casos de uso y lógica de aplicación
│   │   └── services/        # Servicios y lógica de aplicación
│   ├── domain/              # Entidades y lógica de dominio
│   │   ├── entities/
│   │   └── interfaces/      # Interfaces de repositorios y otros contratos
│   ├── infrastructure/      # Implementaciones técnicas y adaptadores
│   │   ├── database/
│   │   ├── logging/
│   │   ├── config/
│   │   └── repositories/
│   ├── interfaces/          # Interfaces de usuario y controladores
│   │   ├── controllers/
│   │   └── routes/
│   ├── shared/              # Código compartido y utilidades
│   │   ├── utils/
│   │   └── middlewares/
│   └── index.ts             # Punto de entrada de la aplicación
├── tests/                   # Pruebas unitarias e integración
│   ├── unit/
│   ├── integration/
│   └── e2e/                 # Pruebas end-to-end
├── package.json
└── tsconfig.json
```

## Comandos

- `npm install`: Instala las dependencias del proyecto.
- `npm run build`: Compila el proyecto TypeScript a JavaScript.
- `npm start`: Inicia la aplicación.
- `npm test`: Ejecuta las pruebas unitarias e integración.
- `npm run dev`: Inicia la aplicación en modo desarrollo con nodemon.
- `npm run format`: Formatea el código usando Prettier.
- `npm run lint`: Ejecuta ESLint para encontrar problemas en el código.
- `npm run lint:fix`: Ejecuta ESLint y corrige automáticamente los problemas encontrados.
- `npm run prepare`: Configura Husky para los hooks de Git.
- `npm run start:mongodb`: Inicia una instancia de MongoDB usando Docker.
- `npm run stop:mongodb`: Detiene la instancia de MongoDB iniciada con Docker.
- `npm run lint-staged`: Ejecuta ESLint y Prettier en los archivos staged.

## Dependencias de npm

### Dependencias de Producción

- `@fastify/swagger`: Genera documentación Swagger para Fastify.
- `@fastify/swagger-ui`: Proporciona una interfaz de usuario para la documentación Swagger.
- `class-validator`: Validación de clases y objetos.
- `dotenv`: Carga variables de entorno desde un archivo `.env`.
- `fastify`: Framework web rápido y de bajo consumo.
- `fastify-swagger`: Plugin para integrar Swagger con Fastify.
- `jsonwebtoken`: Implementación de JSON Web Tokens.
- `mongoose`: ODM para MongoDB.
- `reflect-metadata`: Añade soporte para metadatos de reflexión.
- `winston`: Biblioteca de logging.

### Dependencias de Desarrollo

- `@types/jest`: Tipos para Jest.
- `@types/jsonwebtoken`: Tipos para JSON Web Tokens.
- `@types/node`: Tipos para Node.js.
- `@typescript-eslint/eslint-plugin`: Plugin ESLint para TypeScript.
- `@typescript-eslint/parser`: Parser ESLint para TypeScript.
- `eslint`: Linter para JavaScript y TypeScript.
- `husky`: Herramienta para gestionar hooks de Git.
- `jest`: Framework de pruebas.
- `nodemon`: Herramienta para reiniciar automáticamente la aplicación en modo desarrollo.
- `prettier`: Formateador de código.
- `ts-node`: Ejecuta archivos TypeScript directamente.
- `typescript`: Compilador TypeScript.
- `typescript-eslint`: Conjunto de herramientas ESLint para TypeScript.

## Ejemplos de datos

```json
[
    {
        "id": "",
        "name": "Smartphone X200",
        "brand": "TechCorp",
        "releaseDate": "2023-01-15T00:00:00.000Z",
        "description": "A high-end smartphone with a powerful processor and advanced camera features."
    },
    {
        "id": "",
        "name": "Laptop Pro 15",
        "brand": "CompuWorld",
        "releaseDate": "2022-11-10T00:00:00.000Z",
        "description": "A professional-grade laptop with a 15-inch display and high performance."
    },
    {
        "id": "",
        "name": "Smartwatch S3",
        "brand": "GadgetCo",
        "releaseDate": "2023-03-22T00:00:00.000Z",
        "description": "A smartwatch with fitness tracking and health monitoring features."
    },
    {
        "id": "",
        "name": "Tablet Max 10",
        "brand": "TechCorp",
        "releaseDate": "2022-09-05T00:00:00.000Z",
        "description": "A 10-inch tablet with a high-resolution display and long battery life."
    },
    {
        "id": "",
        "name": "Wireless Earbuds A1",
        "brand": "SoundTech",
        "releaseDate": "2023-02-14T00:00:00.000Z",
        "description": "Wireless earbuds with noise cancellation and high-quality sound."
    },
    {
        "id": "",
        "name": "Gaming Console Z",
        "brand": "PlayMax",
        "releaseDate": "2022-12-01T00:00:00.000Z",
        "description": "A gaming console with 4K resolution and a wide range of games."
    },
    {
        "id": "",
        "name": "Smart Home Hub",
        "brand": "HomeTech",
        "releaseDate": "2023-01-30T00:00:00.000Z",
        "description": "A smart home hub that connects and controls various smart devices."
    },
    {
        "id": "",
        "name": "VR Headset V2",
        "brand": "VirtualX",
        "releaseDate": "2023-05-10T00:00:00.000Z",
        "description": "A VR headset with immersive virtual reality experiences and high resolution."
    },
    {
        "id": "",
        "name": "E-Reader Lite",
        "brand": "ReadOn",
        "releaseDate": "2022-10-20T00:00:00.000Z",
        "description": "A lightweight e-reader with a glare-free screen and long battery life."
    },
    {
        "id": "",
        "name": "Drone Pro",
        "brand": "FlyHigh",
        "releaseDate": "2023-04-18T00:00:00.000Z",
        "description": "A professional drone with high-definition camera and long flight time."
    }
]
```

// src/infrastructure/cache/redisCache.ts
import Redis from 'ioredis';

const redis = new Redis({
host: process.env.REDIS_HOST,
port: Number(process.env.REDIS_PORT),
password: process.env.REDIS_PASSWORD
});

export default redis;

// src/infrastructure/cache/memoryCache.ts
import NodeCache from 'node-cache';

const memoryCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export default memoryCache;

// src/infrastructure/logging/logger.ts
import { NodeTracerProvider } from '@opentelemetry/node';
import { SimpleSpanProcessor } from '@opentelemetry/tracing';
import { ConsoleSpanExporter } from '@opentelemetry/tracing';

const provider = new NodeTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

export default provider.getTracer('default');

// src/infrastructure/monitoring/metrics.ts
import client from 'prom-client';

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

export const httpRequestDurationMicroseconds = new client.Histogram({
name: 'http_request_duration_ms',
help: 'Duration of HTTP requests in ms',
labelNames: ['method', 'route', 'code']
});

npm install typedoc --save-dev

{
"scripts": {
"docs": "typedoc --out docs src"
}
}

npm run docs

usar keycloak para la infra y todo con un docjer-compose
