import mongoose from 'mongoose'
import { Gadget } from '../../domain/entities/gadgetEntity'
import { GadgetRepository } from '../../domain/interfaces/gadgetRepositoryInterface'
import { GadgetModel } from './models/gadgetModel'

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase'
)

/**
 * Repository for managing Gadget entities in MongoDB.
 */
export class MongoGadgetRepository implements GadgetRepository {
    /**
     * Retrieves all gadgets from the database.
     * @returns A promise that resolves to an array of gadgets.
     */
    async findAll(): Promise<Gadget[]> {
        return await GadgetModel.find()
    }

    /**
     * Retrieves a gadget by its ID.
     * @param id - The ID of the gadget to retrieve.
     * @returns A promise that resolves to the gadget or null if not found.
     */
    async findById(id: string): Promise<Gadget | null> {
        return await GadgetModel.findById(id)
    }

    /**
     * Creates a new gadget in the database.
     * @param gadget - The gadget to create.
     * @returns A promise that resolves to the created gadget.
     */
    async create(gadget: Gadget): Promise<Gadget> {
        const newGadget = new GadgetModel({
            ...gadget,
            releaseDate: new Date(gadget.releaseDate),
        })
        await newGadget.save()
        return {
            id: newGadget.id,
            name: newGadget.name,
            brand: newGadget.brand,
            releaseDate: newGadget.releaseDate.toISOString(),
            description: newGadget.description,
        }
    }

    /**
     * Updates an existing gadget in the database.
     * @param gadget - The gadget to update.
     * @returns A promise that resolves when the update is complete.
     */
    async update(gadget: Gadget): Promise<void> {
        await GadgetModel.findByIdAndUpdate(gadget.id, gadget)
    }

    /**
     * Deletes a gadget from the database by its ID.
     * @param id - The ID of the gadget to delete.
     * @returns A promise that resolves when the deletion is complete.
     */
    async delete(id: string): Promise<void> {
        await GadgetModel.findByIdAndDelete(id)
    }
}
