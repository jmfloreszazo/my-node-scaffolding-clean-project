import mongoose, { Schema, Document } from 'mongoose'

interface IGadget extends Document {
    id: string;
    name: string;
    brand: string;
    releaseDate: Date;
}

const GadgetSchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    releaseDate: { type: Date, required: true },
})

const GadgetModel = mongoose.model<IGadget>('Gadget', GadgetSchema)
export { GadgetModel, IGadget }
