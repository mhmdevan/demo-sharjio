import React from "react";
import Slider from "react-slick";

import profileImage from '../assets/svgs/Profile - Filled V2.svg'
import slideImage from '../assets/images/slide1.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Home.module.css';

import { Features, Footer } from '../components';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
};

export const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.firstLine}>
                <button className={styles.profile}>
                    <img src={profileImage} alt={'profile'}/>
                </button>
                <button className={styles.signIn}>
                    ورود|ثبت نام
                </button>
                <p className={styles.hi}>
                    سلام کاربر عزیز
                    <br/>

                </p>
                <span className={styles.description}>
                        با ورود و ثبتنام از امکانات ویژه<br/> سامانه بهره مند شوید
                    </span>
            </div>
            <br/>
            <div className={styles.swiper}>
                <Slider {...settings}>
                    <div>
                        <img src={slideImage} alt={'slide'}/>
                    </div>
                    <div>
                        <img src={slideImage} alt={'slide'}/>
                    </div>
                    <div>
                        <img src={slideImage} alt={'slide'}/>
                    </div>
                </Slider>
            </div>
            <Features />
            <Footer/>
        </div>
    )

}

export default Home
