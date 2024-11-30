export const createGadgetSchema = {
    body: {
        type: 'object',
        required: ['name', 'brand'],
        properties: {
            name: { type: 'string' },
            brand: { type: 'string' },
        },
    },
    response: {
        201: {
            description: 'Gadget created successfully',
            type: 'object',
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                brand: { type: 'string' },
            },
        },
        400: {
            description: 'Bad Request',
            type: 'object',
            properties: {
                errors: { type: 'array', items: { type: 'string' } },
            },
        },
        401: {
            description: 'Unauthorized',
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
        403: {
            description: 'Forbidden',
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
    },
}
