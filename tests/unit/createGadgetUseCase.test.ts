import { CreateGadgetUseCase } from '../../src/application/use-cases/createGadgetUseCase'
import { GadgetsService } from '../../src/application/services/gadgetsService'
import { CreateGadgetDto } from '../../src/interfaces/dto/createGadgetDto'
import { Gadget } from '../../src/domain/entities/gadgetEntity'

describe('CreateGadgetUseCase', () => {
    let gadgetsServiceMock: jest.Mocked<GadgetsService>
    let createGadgetUseCase: CreateGadgetUseCase

    beforeEach(() => {
        gadgetsServiceMock = {
            createGadget: jest.fn()
            // ...mock other methods if necessary...
        } as unknown as jest.Mocked<GadgetsService>

        createGadgetUseCase = new CreateGadgetUseCase(gadgetsServiceMock)
    })

    it('should create a gadget using the gadgetsService', async () => {
        const releaseDate = new Date('2024-12-02T10:49:45.226Z');
        const gadgetDto: CreateGadgetDto = {
            id: '1',
            name: 'Test Gadget',
            brand: 'Test Brand',
            releaseDate: releaseDate.toISOString(),
            description: 'Test Description'
        }
        const expectedGadget: Gadget = {
            id: '1',
            name: 'Test Gadget',
            brand: 'Test Brand',
            releaseDate: releaseDate.toISOString(),
            description: 'Test Description'
        }
        gadgetsServiceMock.createGadget.mockResolvedValue(expectedGadget)

        const result = await createGadgetUseCase.execute(gadgetDto)

        expect(gadgetsServiceMock.createGadget).toHaveBeenCalledWith(gadgetDto)
        expect(result).toEqual(expectedGadget)
    })
})