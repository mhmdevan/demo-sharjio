import {main} from "../../app/axios-clients";
import {UpdateFeatureDto} from "./feature.dto";

export const getFeatures = () => {
    return main.get(`/features`);
}

export const updateFeature = (id: number, data: UpdateFeatureDto) => {
    return main.patch(`/features/${id}`, data)
}