
import { Gadget } from '../../src/domain/entities/gadgetEntity';

describe('Gadget', () => {
    it('should create an instance of Gadget with the provided parameters', () => {
        const id = '123';
        const name = 'Smartphone';
        const brand = 'TechBrand';
        const releaseDate = '2023-01-01';
        const description = 'A high-tech smartphone';

        const gadget = new Gadget(id, name, brand, releaseDate, description);

        expect(gadget.id).toBe(id);
        expect(gadget.name).toBe(name);
        expect(gadget.brand).toBe(brand);
        expect(gadget.releaseDate).toBe(releaseDate);
        expect(gadget.description).toBe(description);
    });
});