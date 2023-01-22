import express, { Application } from 'express';
import { FeatureController } from './feature.controller';


const router = express();

router.get("/", FeatureController.allFeatures);
router.post("/", FeatureController.createFeature);
router.patch("/:id", FeatureController.changeFeature);

export default router