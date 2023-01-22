import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {FeatureDto} from '../../apis/features/feature.dto';
import {getFeatures} from '../../apis/features/feature.api';
import styles from './Features.module.css';
import {Feature} from './Feature';

import Data from 'assets/svgs/Data.svg'
import Film from 'assets/svgs/Filimo.svg'
import Charity from 'assets/svgs/Charity.svg'
import Flower from 'assets/svgs/Flower 1.svg'
import Gift from 'assets/svgs/Gift Card.svg'
import Sim from 'assets/svgs/Sim Card Charge.svg'

export const Features: FunctionComponent = (): JSX.Element => {
    const [value, setValue] = useState<FeatureDto[]>([]);
    const fetchData = useCallback(() => {
        getFeatures()
            .then((res) => {
                console.log(res)
                setValue(res.data)
            })
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => fetchData(), []);

    for (let i = 0; i < value.length; i++) {
        switch (value[i].id) {
            case 1:
                value[i].icon = Data
                break;
            case 2:
                value[i].icon = Sim
                break;
            case 3:
                value[i].icon = Gift
                break;
            case 4:
                value[i].icon = Film
                break;
            case 5:
                value[i].icon = Flower
                break;
            case 6:
                value[i].icon = Charity

        }
    }

    return <div className={styles.features}>
        {value?.map((elem: FeatureDto) => <Feature
            key={elem.id}
            name={elem.name}
            status={elem.status}
            description={elem.description}
            icon={elem.icon}
            id={elem.id}
        />)}
    </div>;
}