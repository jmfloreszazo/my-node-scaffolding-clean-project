import { FastifyInstance } from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import dotenv from 'dotenv'

dotenv.config()

const swaggerOptions = {
    swagger: {
        info: {
            title: 'Clean Architecture API',
            description: 'API documentation',
            version: '1.0.0',
        },
        host: process.env.HOST || 'localhost',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [{ name: 'Gadgets', description: 'Gadgets' }],
    },
    exposeRoute: true,
    routePrefix: process.env.API_DOCS_ROUTE || '/api-docs',
    staticCSP: true,
    transformStaticCSP: (header: string) => header,
    openapi: {
        info: {
            title: 'Clean Architecture API',
            description: 'API documentation',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
                description: 'Local server',
            },
        ],
    },
}

/*
const openapiOptions = {  
    openapi: {  
      info: {  
        title: 'Clean Architecture API',  
        description: 'API documentation',  
        version: '1.0.0',  
      },  
      servers: [  
        {  
          url: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,  
          description: 'Local server',  
        },  
      ],  
      components: {  
        securitySchemes: {  
          Bearer: {  
            type: 'http',  
            scheme: 'bearer',  
            bearerFormat: 'JWT',  
          },  
        },  
      },  
      security: [{ Bearer: [] }],  
    },  
    exposeRoute: true,  
    routePrefix: process.env.API_DOCS_ROUTE || '/api-docs',  
    staticCSP: true,  
    transformStaticCSP: (header: string) => header,  
  };  
*/

const swaggerUiOptions = {
    routePrefix: process.env.API_DOCS_ROUTE || '/api-docs',
    exposeRoute: true,
}

async function setupSwagger(app: FastifyInstance) {
    app.register(fastifySwagger, swaggerOptions)
    app.register(fastifySwaggerUi, swaggerUiOptions)
}

export { setupSwagger }
