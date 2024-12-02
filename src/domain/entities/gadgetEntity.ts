/**
 * Represents a gadget with an id, name, brand, release date, and description.
 */
export class Gadget {
    /**
     * Creates an instance of Gadget.
     * @param id - The unique identifier for the gadget.
     * @param name - The name of the gadget.
     * @param brand - The brand of the gadget.
     * @param releaseDate - The release date of the gadget as string.
     * @param description - A description of the gadget.
     */
    constructor(
        public readonly id: string,
        public name: string,
        public brand: string,
        public releaseDate: string,
        public description: string
    ) {}
}
