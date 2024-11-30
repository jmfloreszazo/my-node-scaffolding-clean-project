import jwt, { JwtPayload } from 'jsonwebtoken'
import { FastifyRequest, FastifyReply } from 'fastify'

interface UserPayload extends JwtPayload {
    id: string
    email: string
    // Add any other properties you expect in the payload
}

interface AuthenticatedRequest extends FastifyRequest {
    user?: UserPayload
}

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
