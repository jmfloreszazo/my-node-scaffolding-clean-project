import { GadgetsService } from '../services/gadgetsService'
import { DIContainer } from '../../infrastructure/config/dIContainer'

/**
 * Use-case class for getting all gadgets.
 */
export class GetAllGadgetsUseCase {
    constructor(
        private gadgetsService: GadgetsService = DIContainer.getGadgetsService()
    ) {}

    /**
     * Executes the use-case.
     * @returns {Promise<Gadget[]>} A promise that resolves to an array of gadgets.
     */
    async execute() {
        return await this.gadgetsService.getAllGadgets()
    }
}
