/**
 * Schema for creating a gadget.
 *
 * @property {object} body - The body of the request.
 * @property {string} body.type - The type of the body, which is an object.
 * @property {string[]} body.required - The required fields in the body.
 * @property {object} body.properties - The properties of the body.
 * @property {string} body.properties.name.type - The type of the name property, which is a string.
 * @property {string} body.properties.brand.type - The type of the brand property, which is a string.
 * @property {string} body.properties.description.type - The type of the description property, which is a string.
 * @property {string} body.properties.releaseDate.type - The type of the releaseDate property, which is a string.
 * @property {string} body.properties.releaseDate.format - The format of the releaseDate property, which is a date.
 *
 * @property {object} response - The response of the request.
 * @property {object} response.201 - The response for a successful creation.
 * @property {string} response.201.description - The description of the 201 response.
 * @property {object} response.201.type - The type of the 201 response, which is an object.
 * @property {object} response.201.properties - The properties of the 201 response.
 * @property {string} response.201.properties.id.type - The type of the id property, which is a string.
 * @property {string} response.201.properties.name.type - The type of the name property, which is a string.
 * @property {string} response.201.properties.brand.type - The type of the brand property, which is a string.
 *
 * @property {object} response.400 - The response for a bad request.
 * @property {string} response.400.description - The description of the 400 response.
 * @property {object} response.400.type - The type of the 400 response, which is an object.
 * @property {object} response.400.properties - The properties of the 400 response.
 * @property {string} response.400.properties.errors.type - The type of the errors property, which is an array of strings.
 *
 * @property {object} response.401 - The response for an unauthorized request.
 * @property {string} response.401.description - The description of the 401 response.
 * @property {object} response.401.type - The type of the 401 response, which is an object.
 * @property {object} response.401.properties - The properties of the 401 response.
 * @property {string} response.401.properties.message.type - The type of the message property, which is a string.
 *
 * @property {object} response.403 - The response for a forbidden request.
 * @property {string} response.403.description - The description of the 403 response.
 * @property {object} response.403.type - The type of the 403 response, which is an object.
 * @property {object} response.403.properties - The properties of the 403 response.
 * @property {string} response.403.properties.message.type - The type of the message property, which is a string.
 */
export const createGadgetSchema = {
    body: {
        type: 'object',
        required: ['name', 'brand', 'releaseDate'],
        properties: {
            name: { type: 'string' },
            brand: { type: 'string' },
            description: { type: 'string' },
            releaseDate: { type: 'string', format: 'date' },
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
