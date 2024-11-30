import mongoose from 'mongoose'
import { Gadget } from '../../domain/entities/gadget'
import { GadgetRepository } from '../../domain/interfaces/gadgetRepository'
import { GadgetModel } from '../models/gadgetModel'

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase'
)

export class MongoGadgetRepository implements GadgetRepository {
    async findAll(): Promise<Gadget[]> {
        return await GadgetModel.find()
    }

    async findById(id: string): Promise<Gadget | null> {
        return await GadgetModel.findById(id)
    }

    async create(gadget: Gadget): Promise<Gadget> {
        const newGadget = new GadgetModel(gadget)
        await newGadget.save()
        return {
            id: newGadget.id,
            name: newGadget.name,
            brand: newGadget.brand,
            releaseDate: newGadget.releaseDate,
        }
    }

    async update(gadget: Gadget): Promise<void> {
        await GadgetModel.findByIdAndUpdate(gadget.id, gadget)
    }

    async delete(id: string): Promise<void> {
        await GadgetModel.findByIdAndDelete(id)
    }
}
