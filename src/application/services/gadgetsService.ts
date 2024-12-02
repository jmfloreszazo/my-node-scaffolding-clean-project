import { GadgetRepository } from '../../domain/interfaces/gadgetRepositoryInterface'
import { CreateGadgetDto } from '../../interfaces/dto/createGadgetDto'
import { Gadget } from '../../domain/entities/gadgetEntity'

/**
 * Service class for managing gadgets.
 */
export class GadgetsService {
    constructor(private gadgetRepository: GadgetRepository) {}

    /**
     * Retrieves all gadgets.
     * @returns {Promise<Gadget[]>} A promise that resolves to an array of gadgets.
     */
    async getAllGadgets(): Promise<Gadget[]> {
        return await this.gadgetRepository.findAll()
    }

    /**
     * Creates a new gadget.
     * @param {CreateGadgetDto} dto - Data transfer object containing the details of the gadget to be created.
     * @returns {Promise<Gadget>} A promise that resolves to the created gadget.
     */
    async createGadget(dto: CreateGadgetDto): Promise<Gadget> {
        const gadget: Gadget = {
            id: dto.id,
            name: dto.name,
            brand: dto.brand,
            releaseDate: dto.releaseDate,
            description: dto.description,
        }
        return await this.gadgetRepository.create(gadget)
    }
}
