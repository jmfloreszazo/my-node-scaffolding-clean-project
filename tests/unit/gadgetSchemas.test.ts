import { createGadgetSchema } from '../../src/interfaces/schemas/gadgetSchemas'
import Ajv from 'ajv'

const ajv = new Ajv()

describe('createGadgetSchema', () => {
    it('should validate a correct schema', () => {
        const validData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
            description: 'A cool gadget',
            releaseDate: '2023-10-01',
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(validData)
        expect(valid).toBe(true)
    })

    it('should invalidate a schema with missing required fields', () => {
        const invalidData = {
            name: 'Gadget Name',
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(invalidData)
        expect(valid).toBe(false)
    })

    it('should invalidate a schema with incorrect types', () => {
        const invalidData = {
            name: 'Gadget Name',
            brand: 12345,
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(invalidData)
        expect(valid).toBe(false)
    })

    it('should invalidate a schema with missing description', () => {
        const invalidData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(invalidData)
        expect(valid).toBe(false)
    })

    it('should invalidate a schema with incorrect description type', () => {
        const invalidData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
            description: 12345,
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(invalidData)
        expect(valid).toBe(false)
    })

    it('should validate a correct schema with description', () => {
        const validData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
            description: 'A cool gadget',
            releaseDate: '2024-01-01',
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(validData)
        expect(valid).toBe(true)
    })

    it('should validate a schema without description', () => {
        const validData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
            releaseDate: '2023-10-01',
            // description is optional
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(validData)
        expect(valid).toBe(true)
    })

    it('should invalidate a schema with missing releaseDate', () => {
        const invalidData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
            description: 'A cool gadget',
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(invalidData)
        expect(valid).toBe(false)
    })

    it('should invalidate a schema with incorrect releaseDate type', () => {
        const invalidData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
            description: 'A cool gadget',
            releaseDate: 'not-a-date',
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(invalidData)
        expect(valid).toBe(false)
    })

    it('should validate a correct schema with releaseDate', () => {
        const validData = {
            name: 'Gadget Name',
            brand: 'Gadget Brand',
            description: 'A cool gadget',
            releaseDate: '2023-10-01',
        }
        const validate = ajv.compile(createGadgetSchema.body)
        const valid = validate(validData)
        expect(valid).toBe(true)
    })

    it('should validate a correct 201 response schema', () => {
        const validResponse = {
            id: '123',
            name: 'Gadget Name',
            brand: 'Gadget Brand',
        }
        const validate = ajv.compile(createGadgetSchema.response[201])
        const valid = validate(validResponse)
        expect(valid).toBe(true)
    })

    // ...add additional tests for 400, 401, 403 responses...
})
