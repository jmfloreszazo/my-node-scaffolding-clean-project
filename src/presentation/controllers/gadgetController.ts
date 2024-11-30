import { FastifyRequest, FastifyReply } from 'fastify'
import { DIContainer } from '../../infrastructure/dIContainer'
import { CreateGadgetDto } from '../dto/createGadgetDto'
import { validate } from 'class-validator'

export class GadgetController {
    private gadgetsService = DIContainer.getGadgetsService()

    async getAll(req: FastifyRequest, reply: FastifyReply) {
        const gadgets = await this.gadgetsService.getAllGadgets()
        reply.send(gadgets)
    }

    async create(req: FastifyRequest, reply: FastifyReply) {
        const dto = Object.assign(new CreateGadgetDto(), req.body)
        const errors = await validate(dto)

        if (errors.length > 0) {
            return reply.status(400).send({ errors })
        }

        const gadget = await this.gadgetsService.createGadget(dto)
        reply.status(201).send(gadget)
    }
}
