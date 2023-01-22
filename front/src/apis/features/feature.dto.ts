export enum statusEnum {
    trial = "trial",
    inactive = "inactive",
    active = "active"
}

export type FeatureDto = {
    id: number
    name: string
    description: string
    icon: string
    status: statusEnum
}

export type UpdateFeatureDto = Omit<FeatureDto, "id">

export type FeatureShowDto = Omit<FeatureDto, ("icon")>
