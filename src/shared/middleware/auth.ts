import jwt, { JwtPayload } from 'jsonwebtoken'
import { FastifyRequest, FastifyReply } from 'fastify'

/**
 * Interface representing the payload of a JWT token.
 */
interface UserPayload extends JwtPayload {
    id: string
    email: string
    // Add any other properties you expect in the payload
}

/**
 * Interface representing a Fastify request with an optional user property.
 */
interface AuthenticatedRequest extends FastifyRequest {
    user?: UserPayload
}

/**
 * Middleware function to authenticate a JWT token.
 *
 * @param request - The Fastify request object.
 * @param reply - The Fastify reply object.
 */
export async function authenticateToken(
    request: AuthenticatedRequest,
    reply: FastifyReply
) {
    const authHeader = request.headers['authorization']
    if (!authHeader) {
        reply.status(401).send()
        return
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
        reply.status(401).send()
        return
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as UserPayload
        request.user = decoded
    } catch (err) {
        console.error('Error verifying token:', err)
        reply.status(403).send()
        return
    }
}

export default authenticateToken
