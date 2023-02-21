import BaseController from '../utils/BaseController'
import { galaxyService } from '../services/GalaxyService'

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
            .get('', this.getGalaxy)
            .post('', this.createGalaxy)

    }
    async getGalaxy(req, res, next) {
        try {
            let query = req.params.query
            const galaxy = await galaxyService.getGalaxy(query)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            let galaxy = req.body
            const galaxyCreated = await galaxyService.createGalaxy(galaxy)
            res.send(galaxyCreated)
        } catch (error) {
            next(error)
        }
    }


}