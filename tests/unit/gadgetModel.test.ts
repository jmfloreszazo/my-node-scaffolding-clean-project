import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { GadgetModel } from '../../src/infrastructure/database/models/gadgetModel'

describe('GadgetModel Unit Tests', () => {
    let mongoServer: MongoMemoryServer

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create()
        const uri = mongoServer.getUri()
        await mongoose.connect(uri)
    }, 30000) // Increase timeout to 30 seconds

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoServer.stop()
    }, 30000) // Increase timeout to 30 seconds

    it('should create and save a gadget successfully', async () => {
        const validGadget = new GadgetModel({
            id: '12345',
            name: 'Smartphone',
            brand: 'TechBrand',
            releaseDate: new Date('2023-01-01'),
            description: 'A new generation smartphone'
        })
        const savedGadget = await validGadget.save()

        expect(savedGadget._id).toBeDefined()
        expect(savedGadget.id).toBe('12345')
        expect(savedGadget.name).toBe('Smartphone')
        expect(savedGadget.brand).toBe('TechBrand')
        expect(savedGadget.releaseDate).toEqual(new Date('2023-01-01'))
        expect(savedGadget.description).toBe('A new generation smartphone')
    })

    it('should fail to create a gadget without required fields', async () => {
        const invalidGadget = new GadgetModel({
            // Missing required fields
        })

        let err
        try {
            await invalidGadget.save()
        } catch (error) {
            err = error
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        if (err instanceof mongoose.Error.ValidationError) {
            expect(err.errors.id).toBeDefined()
            expect(err.errors.name).toBeDefined()
            expect(err.errors.brand).toBeDefined()
            expect(err.errors.releaseDate).toBeDefined()
            expect(err.errors.description).toBeDefined()
        }
    })
})