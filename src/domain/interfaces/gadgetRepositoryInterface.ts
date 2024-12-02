import { Gadget } from '../entities/gadgetEntity'

/**
 * The GadgetRepository interface defines the methods that any implementation of a gadget repository must have.
 * This ensures that CRUD (Create, Read, Update, Delete) operations can be performed on gadgets consistently.
 */
export interface GadgetRepository {
    /**
     * Retrieves all gadgets.
     * @returns A promise that resolves with a list of gadgets.
     */
    findAll(): Promise<Gadget[]>

    /**
     * Finds a gadget by its ID.
     * @param id - The ID of the gadget to find.
     * @returns A promise that resolves with the found gadget or null if not found.
     */
    findById(id: string): Promise<Gadget | null>

    /**
     * Creates a new gadget.
     * @param gadget - The gadget to create.
     * @returns A promise that resolves with the created gadget.
     */
    create(gadget: Gadget): Promise<Gadget>

    /**
     * Updates an existing gadget.
     * @param gadget - The gadget to update.
     * @returns A promise that resolves when the update is complete.
     */
    update(gadget: Gadget): Promise<void>

    /**
     * Deletes a gadget by its ID.
     * @param id - The ID of the gadget to delete.
     * @returns A promise that resolves when the deletion is complete.
     */
    delete(id: string): Promise<void>
}
