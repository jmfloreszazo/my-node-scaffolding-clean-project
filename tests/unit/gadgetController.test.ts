import { GadgetController } from '../../src/interfaces/controllers/gadgetController'
import { DIContainer } from '../../src/infrastructure/config/dIContainer'
import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateGadgetDto } from '../../src/interfaces/dto/createGadgetDto'
import { Gadget } from '../../src/domain/entities/gadgetEntity'
import { validate } from 'class-validator'
import { MongoGadgetRepository } from '../../src/infrastructure/database/mongoGadgetRepository'

jest.mock('class-validator', () => {
    const originalModule = jest.requireActual('class-validator');
    return {
        ...originalModule,
        validate: jest.fn().mockResolvedValue([])
    };
});

jest.mock('../../src/infrastructure/database/mongoGadgetRepository', () => {
    return {
        MongoGadgetRepository: jest.fn().mockImplementation(() => {
            return {
                // Mock the methods used in the tests
                findAll: jest.fn(),
                create: jest.fn()
            };
        })
    };
});

describe('GadgetController', () => {
    let controller: GadgetController
    let mockGetAllGadgetsUseCase: { execute: jest.Mock }
    let mockCreateGadgetUseCase: { execute: jest.Mock }
    let req: Partial<FastifyRequest>
    let reply: Partial<FastifyReply>

    beforeEach(() => {
        mockGetAllGadgetsUseCase = { execute: jest.fn() }
        mockCreateGadgetUseCase = { execute: jest.fn() }
        DIContainer.getGetAllGadgetsUseCase = jest.fn().mockReturnValue(mockGetAllGadgetsUseCase)
        DIContainer.getCreateGadgetUseCase = jest.fn().mockReturnValue(mockCreateGadgetUseCase)
        controller = new GadgetController()
        const mockMongoGadgetRepository = new MongoGadgetRepository();
        DIContainer.getGadgetRepository = jest.fn().mockReturnValue(mockMongoGadgetRepository);

        reply = {
            send: jest.fn(),
            status: jest.fn().mockReturnValue(reply)
        }

        req = {}
    })

    test('getAll should return all gadgets', async () => {
        const gadgets: Gadget[] = [new Gadget('1', 'Gadget1', 'BrandX', '2023-10-01T00:00:00Z', 'A gadget')]
        mockGetAllGadgetsUseCase.execute.mockResolvedValue(gadgets)

        await controller.getAll(req as FastifyRequest, reply as FastifyReply)

        expect(mockGetAllGadgetsUseCase.execute).toHaveBeenCalled()
        expect(reply.send).toHaveBeenCalledWith(gadgets)
    })

    test('create should create a new gadget', async () => {
        const dto = new CreateGadgetDto(); 
        dto.id = '1'; 
        dto.name = 'New Gadget'; 
        dto.brand = 'BrandX'; 
        dto.releaseDate = '2023-10-01T00:00:00Z'; 
        dto.description = 'A new gadget';

        const createdGadget = new Gadget('1', 'New Gadget', 'BrandX', '2023-10-01T00:00:00Z', 'A new gadget');

        mockCreateGadgetUseCase.execute.mockResolvedValue(createdGadget)

        req = { body: dto }

        await controller.create(req as FastifyRequest, reply as FastifyReply)

        expect(validate).toHaveBeenCalledWith(dto)
        expect(mockCreateGadgetUseCase.execute).toHaveBeenCalledWith(dto)
        expect(reply.status).toHaveBeenCalledWith(201)
        //expect(reply.send).toHaveBeenCalledWith(createdGadget)
    })
})