import { GetAllGadgetsUseCase } from '../../src/application/use-cases/getAllGadgetsUseCase'
import { GadgetsService } from '../../src/application/services/gadgetsService'
import { Gadget } from '../../src/domain/entities/gadgetEntity'
import { jest } from '@jest/globals'

describe('GetAllGadgetsUseCase', () => {
    let gadgetsServiceMock: jest.Mocked<GadgetsService>
    let getAllGadgetsUseCase: GetAllGadgetsUseCase

    beforeEach(() => {
        gadgetsServiceMock = {
            getAllGadgets: jest.fn()
        } as unknown as jest.Mocked<GadgetsService>

        getAllGadgetsUseCase = new GetAllGadgetsUseCase(gadgetsServiceMock)
    })

    it('should return an array of gadgets', async () => {
        const mockGadgets: Gadget[] = [
            { id: '1', name: 'Gadget One', description: 'First gadget', brand: 'Brand A', releaseDate: new Date().toISOString() },
            { id: '2', name: 'Gadget Two', description: 'Second gadget', brand: 'Brand B', releaseDate: new Date().toISOString() }
        ]
        gadgetsServiceMock.getAllGadgets.mockResolvedValue(mockGadgets)

        const result = await getAllGadgetsUseCase.execute()

        expect(result).toEqual(mockGadgets)
        expect(gadgetsServiceMock.getAllGadgets).toHaveBeenCalled()
    })

    it('should handle errors thrown by the service', async () => {
        const error = new Error('Service error')
        gadgetsServiceMock.getAllGadgets.mockRejectedValue(error)

        await expect(getAllGadgetsUseCase.execute()).rejects.toThrow('Service error')
        expect(gadgetsServiceMock.getAllGadgets).toHaveBeenCalled()
    })
})