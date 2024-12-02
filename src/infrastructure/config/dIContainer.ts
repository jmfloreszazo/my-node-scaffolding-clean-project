/**
 * DIContainer is responsible for managing dependencies and providing instances of services and repositories.
 * This is an implementation of Dependency Injection (DI) as part of the SOLID principles.
 * Inversion of Control (IoC) is achieved by having this container manage the creation and lifecycle of dependencies.
 * This approach is used in Node.js without relying on external libraries.
 */
import { MongoGadgetRepository } from '../database/mongoGadgetRepository'
import { GadgetsService } from '../../application/services/gadgetsService'
import { GetAllGadgetsUseCase } from '../../application/use-cases/getAllGadgetsUseCase'
import { CreateGadgetUseCase } from '../../application/use-cases/createGadgetUseCase'

class DIContainer {
    private static _instances = new Map()

    /**
     * Registers a dependency in the container.
     * @param {string} key The key to identify the dependency.
     * @param {T} instance The instance of the dependency.
     */
    static register<T>(key: string, instance: T) {
        this._instances.set(key, instance)
    }

    /**
     * Resolves a dependency from the container.
     * @param {string} key The key to identify the dependency.
     * @returns {any} The resolved dependency.
     */
    static resolve(key: string) {
        return this._instances.get(key)
    }

    /**
     * Returns an instance of MongoGadgetRepository.
     * @returns {MongoGadgetRepository} The gadget repository instance.
     */
    static getGadgetRepository() {
        if (!this.resolve('GadgetRepository')) {
            this.register('GadgetRepository', new MongoGadgetRepository())
        }
        return this.resolve('GadgetRepository')
    }

    /**
     * Returns an instance of GadgetsService.
     * @returns {GadgetsService} The gadgets service instance.
     */
    static getGadgetsService() {
        if (!this.resolve('GadgetsService')) {
            this.register(
                'GadgetsService',
                new GadgetsService(this.getGadgetRepository())
            )
        }
        return this.resolve('GadgetsService')
    }

    static getGetAllGadgetsUseCase() {
        if (!this.resolve('GetAllGadgetsUseCase')) {
            this.register(
                'GetAllGadgetsUseCase',
                new GetAllGadgetsUseCase(this.getGadgetsService())
            )
        }
        return this.resolve('GetAllGadgetsUseCase')
    }

    static getCreateGadgetUseCase() {
        if (!this.resolve('CreateGadgetUseCase')) {
            this.register(
                'CreateGadgetUseCase',
                new CreateGadgetUseCase(this.getGadgetsService())
            )
        }
        return this.resolve('CreateGadgetUseCase')
    }
}

export { DIContainer }
