import { FastifyInstance } from 'fastify'
import { GadgetController } from '../controllers/gadgetController'
import { createGadgetSchema } from '../schemas/gadgetSchemas'

const gadgetController = new GadgetController()
const GADGETS_ROUTE = '/gadgets'

/**
 * Registers the gadget routes with the Fastify instance.
 *
 * @param {FastifyInstance} fastify - The Fastify instance to register the routes with.
 */
export async function gadgetRoutes(fastify: FastifyInstance) {
    fastify.get(GADGETS_ROUTE, async (request, reply) =>
        gadgetController.getAll(request, reply)
    )

    fastify.post(
        GADGETS_ROUTE,
        { schema: createGadgetSchema },
        async (request, reply) => gadgetController.create(request, reply)
    )
}
