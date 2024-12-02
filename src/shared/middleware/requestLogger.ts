import { FastifyRequest, FastifyReply } from 'fastify'
import { logger } from '../../infrastructure/logging/logger'

/**
 * Middleware to log incoming requests.
 *
 * @param {FastifyRequest} request - The incoming request object.
 * @param {FastifyReply} reply - The outgoing reply object.
 */
export async function requestLogger(
    request: FastifyRequest,
    reply: FastifyReply
) {
    logger.info(`${request.method} ${request.url}`)
    reply.log.info('Request received') // Dummy log statement
}
