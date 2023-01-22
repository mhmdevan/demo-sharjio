import {Request, Response} from 'express';

import {FeatureModel} from "./feature.model";
import {UpdateFeatureDto, FeatureDto} from "./feature.dto";

export class FeatureController {

    static allFeatures(req: Request, res: Response): void {
        try {
            res.send(FeatureModel.listOfFeatures())
        } catch (err) {
            res.status(400).send(err.message)
        }
    }

    static createFeature(req: Request, res: Response): void {
        try {
            const data: FeatureDto = req.body

            res.send(FeatureModel.addFeature(data))
        } catch (err) {
            res.status(400).send(err.message)
        }
    }

    static changeFeature(req: Request, res: Response): void {
        try {
            const data: UpdateFeatureDto = req.body
            const id: number = Number(req.params.id)

            res.send(FeatureModel.updateFeature(id, data))
        } catch (err) {
            res.status(400).send(err.message)
        }
    }

}