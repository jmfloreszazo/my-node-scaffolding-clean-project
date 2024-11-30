import { MongoGadgetRepository } from './repositories/mongoGadgetRepository'
import { GadgetsService } from '../services/gadgetsService'

class DIContainer {
    private static _gadgetRepository = new MongoGadgetRepository()

    static getGadgetRepository() {
        return this._gadgetRepository
    }

    static getGadgetsService() {
        return new GadgetsService(this.getGadgetRepository())
    }
}

export { DIContainer }
