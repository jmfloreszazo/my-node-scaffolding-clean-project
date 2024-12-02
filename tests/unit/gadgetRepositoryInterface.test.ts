import { GadgetRepository } from '../../src/domain/interfaces/gadgetRepositoryInterface';
import { Gadget } from '../../src/domain/entities/gadgetEntity';

describe('GadgetRepository', () => {
    let gadgetRepository: GadgetRepository;
    let mockGadget: Gadget;

    beforeEach(() => {
        mockGadget = { id: '1', name: 'Test Gadget', description: 'A test gadget', brand: 'Test Brand', releaseDate: new Date().toISOString() };
        gadgetRepository = {
            findAll: jest.fn().mockResolvedValue([mockGadget]),
            findById: jest.fn().mockResolvedValue(mockGadget),
            create: jest.fn().mockImplementation((gadget) => Promise.resolve(gadget)),
            update: jest.fn().mockResolvedValue(undefined),
            delete: jest.fn().mockResolvedValue(undefined),
        };
    });

    it('should retrieve all gadgets', async () => {
        const gadgets = await gadgetRepository.findAll();
        expect(gadgets).toEqual([mockGadget]);
    });

    it('should find a gadget by its ID', async () => {
        const gadget = await gadgetRepository.findById('1');
        expect(gadget).toEqual(mockGadget);
    });

    it('should create a new gadget', async () => {
        const newGadget = { id: '2', name: 'New Gadget', description: 'A new gadget', brand: 'New Brand', releaseDate: new Date().toISOString() };
        const createdGadget = await gadgetRepository.create(newGadget);
        expect(createdGadget).toEqual(newGadget);
    });

    it('should update an existing gadget', async () => {
        const updatedGadget = { ...mockGadget, name: 'Updated Gadget' };
        await gadgetRepository.update(updatedGadget);
        expect(gadgetRepository.update).toHaveBeenCalledWith(updatedGadget);
    });

    it('should delete a gadget by its ID', async () => {
        await gadgetRepository.delete('1');
        expect(gadgetRepository.delete).toHaveBeenCalledWith('1');
    });
});