import { FastifyInstance } from 'fastify'
import { GadgetController } from '../controllers/gadgetController'
import { authenticateToken } from '../middleware/auth'
import { createGadgetSchema } from '../schemas/gadgetSchemas'

const gadgetController = new GadgetController()
const GADGETS_ROUTE = '/gadgets'

export async function gadgetRoutes(fastify: FastifyInstance) {
    fastify.get(
        GADGETS_ROUTE,
        { preHandler: [authenticateToken] },
        async (request, reply) => gadgetController.getAll(request, reply)
    )

    fastify.post(
        GADGETS_ROUTE,
        { preHandler: [authenticateToken], schema: createGadgetSchema },
        async (request, reply) => gadgetController.create(request, reply)
    )
}
