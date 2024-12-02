import { GadgetsService } from '../services/gadgetsService'
import { CreateGadgetDto } from '../../interfaces/dto/createGadgetDto'
import { DIContainer } from '../../infrastructure/config/dIContainer'

/**
 * Use case for creating a gadget.
 */
export class CreateGadgetUseCase {
    /**
     * Constructor for CreateGadgetUseCase.
     * @param gadgetsService - The service to handle gadget operations.
     */
    constructor(
        private gadgetsService: GadgetsService = DIContainer.getGadgetsService()
    ) {}

    /**
     * Executes the use case to create a gadget.
     * @param dto - Data transfer object containing gadget details.
     * @returns A promise that resolves to the created gadget.
     */
    async execute(dto: CreateGadgetDto) {
        return await this.gadgetsService.createGadget(dto)
    }
}
