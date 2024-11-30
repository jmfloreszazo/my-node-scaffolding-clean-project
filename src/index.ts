import 'reflect-metadata'
import Fastify from 'fastify'
import dotenv from 'dotenv'
dotenv.config()

import { gadgetRoutes } from './presentation/routes/gadgetRoutes'
import { errorHandler } from './presentation/middleware/errorHandler'
import { logger } from './infrastructure/logger'
import { setupSwagger } from './presentation/swagger'
import { AddressInfo } from 'net';

const app = Fastify()

app.setErrorHandler(errorHandler)
setupSwagger(app)
app.register(gadgetRoutes, { prefix: '/api' })

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost' // Ensure HOST is read from environment variables

const start = async () => {
    try {
        await app.listen({ port: Number(PORT), host: HOST })
        const address = app.server.address() as AddressInfo;
        if (address) {
            logger.info(`Server URL: http://${HOST}:${PORT}`);
        } else {
            logger.error('Failed to get server address');
        }
    } catch (err) {
        logger.error(err)
        process.exit(1)
    }
}

start()
