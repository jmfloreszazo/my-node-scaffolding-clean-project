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
    routePrefix: process.env.API_DOCS_ROUTE || '/swagger',
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
                // url: `https://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
                description: 'Local server',
            },
        ],
    },
}

const swaggerUiOptions = {
    routePrefix: process.env.API_DOCS_ROUTE || '/api-docs',
    exposeRoute: true,
}

/**
 * Sets up Swagger and Swagger UI for the Fastify application.
 * Registers the Swagger and Swagger UI plugins with the provided options.
 *
 * @param {FastifyInstance} app - The Fastify application instance.
 */
async function setupSwagger(app: FastifyInstance) {
    app.register(fastifySwagger, swaggerOptions)
    app.register(fastifySwaggerUi, swaggerUiOptions)
}

export { setupSwagger }
