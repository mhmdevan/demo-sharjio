import {UpdateFeatureDto, FeatureDto, statusEnum} from "./feature.dto";

//generic type - resusable beshe
//end point - dto update & create

let features: (FeatureDto | UpdateFeatureDto)[] = [
    {
        "id": 1,
        "name": "بسته اینترنتی",
        "description": "خرید مستقیم بسته های اینترنتی",
        "icon": "/static/media/Data.ba417251bb8c9a643eb2cbbbffe68a91.svg",
        "status": statusEnum.active
    },
    {
        "id": 2,
        "name": "شارژ اعتباری",
        "description": "خرید شارژ آنی به صورت مستقیم",
        "icon": "m",
        "status": statusEnum.active
    },
    {
        "id": 3,
        "name": "کارت هدیه",
        "description": "ارسال کار هدیه در کمتر از 10 دقیقه",
        "icon": "m",
        "status": statusEnum.active
    },
    {
        "id": 4,
        "name": "اشتراک فیلمو",
        "description": "خرذید اشتراک فیلیمو با پرداخت ارزی",
        "icon": "m",
        "status": statusEnum.active
    },
    {
        "id": 5,
        "name": "سفارش دسته گل",
        "description": "خرید مستقیم بسته های اینترنتی",
        "icon": "m",
        "status": statusEnum.trial
    },
    {
        "id": 6,
        "name": "نیکوکاری",
        "description": "این قابلیت به زودی فعال خواهد شد",
        "icon": "m",
        "status": statusEnum.inactive
    }
]

export class FeatureModel {
    constructor() {
    }

    /**
     *
     * @param id a feature
     * @returns status of feature that is unique or not
     */
    static checkUniqueFeature(id: number) {
        const existStatus: number = features.findIndex((elem: FeatureDto) => {
            elem.id == id
        })

        if (existStatus === -1)
            return true
        else
            return false
    }

    /**
     *
     * @param data a feature
     * @returns list of features
     */
    static addFeature(data: FeatureDto) {
        const uniqueStatus: boolean = this.checkUniqueFeature(data.id)
        if (!uniqueStatus)
            throw new Error("this id is exist")

        features.push(data)
        return features
    }

    /**
     *
     * @param id of feature
     * @param data of feature
     * @returns list of features
     */
    static updateFeature(id: number, data: UpdateFeatureDto) {
        let idFound = false

        for (let i = 0; i < features.length; i++) {
            if ((features[i] as FeatureDto).id === id) {
                features[i] = {
                    id: id,
                    name: data.name,
                    description: data.description,
                    icon: data.icon,
                    status: data.status
                }
                idFound = true
                break;
            }
        }

        if (!idFound)
            throw new Error("this id is not exist")

        return features
    }

    /**
     *
     * @returns list of features
     */
    static listOfFeatures() {
        return features
    }
} 