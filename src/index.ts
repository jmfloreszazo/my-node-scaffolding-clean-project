/**
 * Entry point for the Fastify application.
 *
 * This file sets up the Fastify server, configures middleware, routes, and error handling,
 * and starts the server on the specified host and port.
 */

import 'reflect-metadata'
import Fastify from 'fastify'
import dotenv from 'dotenv'
//import fs from 'fs'
//import path from 'path'
dotenv.config()

import { gadgetRoutes } from './interfaces/routes/gadgetRoutes'
import { errorHandler } from './shared/middleware/errorHandler'
import { logger } from './infrastructure/logging/logger'
import { setupSwagger } from './interfaces/swagger'
import { AddressInfo } from 'net'

const app = Fastify()

/*
const app = Fastify({
  https: {
    key: fs.readFileSync(path.join(__dirname, '../certs/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../certs/cert.pem'))
  }
})
  */

// Set custom error handler
app.setErrorHandler(errorHandler)

// Setup Swagger documentation
setupSwagger(app)

// Register routes with a prefix
app.register(gadgetRoutes, { prefix: '/api' })

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost' // Ensure HOST is read from environment variables

/**
 * Starts the Fastify server.
 *
 * Attempts to listen on the specified host and port. Logs the server URL on success,
 * or logs an error and exits the process on failure.
 */
const start = async () => {
    try {
        if (!app.server.listening) {
            await app.listen({ port: Number(PORT), host: HOST })
            const address = app.server.address() as AddressInfo
            if (address) {
                logger.info(`Server URL: http://${HOST}:${PORT}`)
                //logger.info(`Server URL: https://${HOST}:${PORT}`)
            } else {
                logger.error('Failed to get server address')
            }
        }
    } catch (err) {
        logger.error(err)
        process.exit(1)
    }
}

start()

export { app, start }
