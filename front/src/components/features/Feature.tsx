import {Component} from "react";
import {FeatureDto} from "../../apis/features/feature.dto";
import styles from './Feature.module.css';

export class Feature extends Component <FeatureDto, any> {

    constructor(props: FeatureDto) {
        super(props);
    }

    render() {
        if (this.props.status === 'inactive')
            return null

        return (
            <div className={styles.feature}>
                <div className={styles.top}>
                    <img className={styles.logo} src={this.props.icon} alt={'logo'}/>

                    <h4 className={styles.title}> {this.props.name}</h4>
                </div>
                <span className={styles.description}>
                    {this.props.description}
                </span>
            </div>
        );
    }

}