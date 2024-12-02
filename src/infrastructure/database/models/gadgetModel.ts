import mongoose, { Schema, Document } from 'mongoose'

/**
 * Interface representing a Gadget document in MongoDB.
 */
interface IGadget extends Document {
    /**
     * The unique identifier for the gadget.
     */
    id: string
    /**
     * The name of the gadget.
     */
    name: string
    /**
     * The brand of the gadget.
     */
    brand: string
    /**
     * The release date of the gadget.
     */
    releaseDate: Date
    /**
     * A description of the gadget.
     */
    description: string
}

const GadgetSchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    description: { type: String, required: true },
})

/**
 * Mongoose model for the Gadget schema.
 */
const GadgetModel = mongoose.model<IGadget>('Gadget', GadgetSchema)
export { GadgetModel, IGadget }
