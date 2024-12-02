import { DIContainer } from '../../src/infrastructure/config/dIContainer'
import { MongoGadgetRepository } from '../../src/infrastructure/database/mongoGadgetRepository'
import { GadgetsService } from '../../src/application/services/gadgetsService'
import { GetAllGadgetsUseCase } from '../../src/application/use-cases/getAllGadgetsUseCase'
import { CreateGadgetUseCase } from '../../src/application/use-cases/createGadgetUseCase'

describe('DIContainer', () => {
    beforeEach(() => {
        // Clear the container before each test
        DIContainer['_instances'].clear()
    })

    it('should register and resolve a dependency', () => {
        class TestService {}
        DIContainer.register('TestService', new TestService())
        const resolved = DIContainer.resolve('TestService')
        expect(resolved).toBeInstanceOf(TestService)
    })

    it('should return an instance of MongoGadgetRepository', () => {
        const repository = DIContainer.getGadgetRepository()
        expect(repository).toBeInstanceOf(MongoGadgetRepository)
    })

    it('should return an instance of GadgetsService', () => {
        const service = DIContainer.getGadgetsService()
        expect(service).toBeInstanceOf(GadgetsService)
    })

    it('should return an instance of GetAllGadgetsUseCase', () => {
        const useCase = DIContainer.getGetAllGadgetsUseCase()
        expect(useCase).toBeInstanceOf(GetAllGadgetsUseCase)
    })

    it('should return an instance of CreateGadgetUseCase', () => {
        const useCase = DIContainer.getCreateGadgetUseCase()
        expect(useCase).toBeInstanceOf(CreateGadgetUseCase)
    })
})
