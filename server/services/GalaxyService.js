
import { dbContext } from "../db/DbContext"

class GalaxyService {
    async getGalaxy(query) {
        const galaxy = await dbContext.Galaxy.find(query)
        return galaxy
    }

    async createGalaxy(galaxy) {
        const galaxyCreated = await dbContext.Galaxy.create(galaxy)
        return galaxyCreated

    }

}

export const galaxyService = new GalaxyService