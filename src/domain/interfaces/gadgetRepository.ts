import { Gadget } from '../entities/gadget'

export interface GadgetRepository {
    findAll(): Promise<Gadget[]>;
    findById(id: string): Promise<Gadget | null>;
    create(gadget: Gadget): Promise<Gadget>;
    update(gadget: Gadget): Promise<void>;
    delete(id: string): Promise<void>;
}
