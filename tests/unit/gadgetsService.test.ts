import { GadgetsService } from '../../src/application/services/gadgetsService'
import { GadgetRepository } from '../../src/domain/interfaces/gadgetRepositoryInterface'
import { CreateGadgetDto } from '../../src/interfaces/dto/createGadgetDto'
import { Gadget } from '../../src/domain/entities/gadgetEntity'

describe('GadgetsService', () => {
    let gadgetsService: GadgetsService
    let gadgetRepository: jest.Mocked<GadgetRepository>

    beforeEach(() => {
        gadgetRepository = {
            findAll: jest.fn(),
            create: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        }
        gadgetsService = new GadgetsService(gadgetRepository)
    })

    describe('getAllGadgets', () => {
        it('should return an array of gadgets', async () => {
            const gadgets: Gadget[] = [
                { id: '1', name: 'Gadget 1', brand: 'Brand A', releaseDate: new Date().toISOString(), description: 'Description 1' },
                { id: '2', name: 'Gadget 2', brand: 'Brand B', releaseDate: new Date().toISOString(), description: 'Description 2' },
            ]
            gadgetRepository.findAll.mockResolvedValue(gadgets)

            const result = await gadgetsService.getAllGadgets()

            expect(result).toEqual(gadgets)
            expect(gadgetRepository.findAll).toHaveBeenCalledTimes(1)
        })

        it('should return an empty array if no gadgets are found', async () => {
            gadgetRepository.findAll.mockResolvedValue([])

            const result = await gadgetsService.getAllGadgets()

            expect(result).toEqual([])
            expect(gadgetRepository.findAll).toHaveBeenCalledTimes(1)
        })

        it('should throw an error if there is an issue retrieving gadgets', async () => {
            gadgetRepository.findAll.mockRejectedValue(new Error('Database error'))

            await expect(gadgetsService.getAllGadgets()).rejects.toThrow('Database error')
            expect(gadgetRepository.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('createGadget', () => {
        it('should create and return a new gadget', async () => {
            const dto: CreateGadgetDto = { id: '3', name: 'New Gadget', brand: 'Brand C', releaseDate: new Date().toISOString(), description: 'A new gadget description' }
            const createdGadget: Gadget = { id: '3', name: dto.name, brand: dto.brand, releaseDate: new Date(dto.releaseDate).toISOString(), description: dto.description }
            gadgetRepository.create.mockResolvedValue(createdGadget)

            const result = await gadgetsService.createGadget(dto)

            expect(result).toEqual(createdGadget)
            expect(gadgetRepository.create).toHaveBeenCalledWith(expect.objectContaining({
                id: dto.id,
                name: dto.name,
                brand: dto.brand,
                releaseDate: new Date(dto.releaseDate).toISOString(),
                description: dto.description,
            }))
        })

        it('should throw an error if name is missing', async () => {
            const dto: CreateGadgetDto = { id: '4', name: '', brand: 'Brand C', releaseDate: new Date().toISOString(), description: 'A description' }
            gadgetRepository.create.mockImplementation(() => {
                throw new Error('Name is required');
            });
            await expect(gadgetsService.createGadget(dto)).rejects.toThrow('Name is required')
        })

        it('should throw an error if brand is missing', async () => {
            const dto: CreateGadgetDto = { id: '5', name: 'New Gadget', brand: '', releaseDate: new Date().toISOString(), description: 'A description' }
            gadgetRepository.create.mockImplementation(() => {
                throw new Error('Brand is required');
            });
            await expect(gadgetsService.createGadget(dto)).rejects.toThrow('Brand is required')
        })

        it('should throw an error if releaseDate is in the future', async () => {
            const futureDate = new Date()
            futureDate.setFullYear(futureDate.getFullYear() + 1)
            const dto: CreateGadgetDto = { id: '6', name: 'New Gadget', brand: 'Brand C', releaseDate: futureDate.toISOString(), description: 'A description' }
            gadgetRepository.create.mockImplementation(() => {
                throw new Error('Release date cannot be in the future');
            });
            await expect(gadgetsService.createGadget(dto)).rejects.toThrow('Release date cannot be in the future')
        })

        it('should throw an error if gadget already exists', async () => {
            const dto: CreateGadgetDto = { id: '7', name: 'Existing Gadget', brand: 'Brand C', releaseDate: new Date().toISOString(), description: 'An existing gadget description' }
            gadgetRepository.create.mockRejectedValue(new Error('Gadget already exists'))
            await expect(gadgetsService.createGadget(dto)).rejects.toThrow('Gadget already exists')
        })
    })
})