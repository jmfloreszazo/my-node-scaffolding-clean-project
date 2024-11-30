import { FastifyRequest, FastifyReply } from 'fastify'
import { logger } from '../../infrastructure/logger'

export async function requestLogger(
    request: FastifyRequest,
    reply: FastifyReply
) {
    logger.info(`${request.method} ${request.url}`)
    reply.log.info('Request received') // Dummy log statement
}
