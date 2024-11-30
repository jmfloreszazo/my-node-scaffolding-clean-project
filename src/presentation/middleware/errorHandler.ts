import { FastifyRequest, FastifyReply } from 'fastify'

export function errorHandler(
    err: Error & { statusCode?: number },
    req: FastifyRequest,
    res: FastifyReply
) {
    console.error(err.stack)
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send({ message })
}
