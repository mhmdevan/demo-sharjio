import {SlSettings} from 'react-icons/sl';
import {IoIosNotificationsOutline} from "react-icons/io";
import {Component} from "react";

import styles from './Navbar.module.css';
import mainLogo from 'assets/images/main-logo.png';

export class Navbar extends Component{
    render() {
        return (
            <div className={styles.icons}>

                <a><IoIosNotificationsOutline/></a>
                <img className={styles.mainLogo} src={mainLogo} alt={'not loaded'}/>
                <a><SlSettings/></a>
            </div>
        )
    }
}

