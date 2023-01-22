import {Component} from "react";

import styles from './Footer.module.css';

import Support from 'assets/svgs/Support-Stroke.svg';
import Profile from 'assets/svgs/black-Profile.svg';
import Order from 'assets/svgs/order.svg';
import Services from 'assets/svgs/services.svg';
import { FooterItem } from './FooterItem';

export class Footer extends Component<any, any> {
    render() {
        return (
            <div className={styles.footer}>
                <FooterItem title={'پشتیبانی'} alt={'support'} iconSrc={Support} />
                <FooterItem title={'پروفایل'} alt={'profile'} iconSrc={Profile} />
                <FooterItem title={'سفارش ها'} alt={'order'} iconSrc={Order} />
                <FooterItem title={'خدمات'} alt={'service'} iconSrc={Services} />
            </div>
        );
    }
}