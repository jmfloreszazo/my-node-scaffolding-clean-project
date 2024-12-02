import { FastifyRequest, FastifyReply } from 'fastify'
import { DIContainer } from '../../infrastructure/config/dIContainer'
import { validate } from 'class-validator'
import { CreateGadgetDto } from '../../interfaces/dto/createGadgetDto'

/**
 * Controller for handling gadget-related HTTP requests.
 */
export class GadgetController {
    private getAllGadgetsUseCase = DIContainer.getGetAllGadgetsUseCase()
    private createGadgetUseCase = DIContainer.getCreateGadgetUseCase()

    /**
     * Handles the retrieval of all gadgets.
     * @param {FastifyRequest} req - The request object.
     * @param {FastifyReply} reply - The reply object.
     */
    async getAll(req: FastifyRequest, reply: FastifyReply) {
        const gadgets = await this.getAllGadgetsUseCase.execute()
        reply.send(gadgets)
    }

    /**
     * Handles the creation of a new gadget.
     * @param {FastifyRequest} req - The request object.
     * @param {FastifyReply} reply - The reply object.
     */
    async create(req: FastifyRequest, reply: FastifyReply) {
        const dto = Object.assign(new CreateGadgetDto(), req.body)
        const errors = await validate(dto)

        if (errors.length > 0) {
            return reply.status(400).send({ errors })
        }

        const gadget = await this.createGadgetUseCase.execute(dto)
        reply.status(201).send(gadget)
    }
}
