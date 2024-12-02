import { FastifyRequest, FastifyReply } from 'fastify'

/**
 * Error handler middleware for Fastify.
 * Logs the error stack and sends a formatted error response.
 *
 * @param err - The error object, which may include a statusCode property.
 * @param req - The Fastify request object.
 * @param res - The Fastify reply object.
 */
export function errorHandler(
    err: Error & { statusCode?: number },
    req: FastifyRequest,
    res: FastifyReply
) {
    // Log the error stack for debugging purposes
    console.error(err.stack)

    // Determine the status code and message to send in the response
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'

    // Send the error response
    res.status(statusCode).send({ message })
}
