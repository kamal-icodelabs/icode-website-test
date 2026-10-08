
'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import Image from "next/image";
import css from './CompaniesLogosCarousel.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth';

const CompaniesLogosCarousel = () => {
    return (
        <>
            <section className={css.companiesLogosCarousel}>
                <ContentWidth>
                    <h2 className={css.companiesLogoTitle}>Trusted by 50+ marketplace founders worldwide.</h2>
                    <div className={css.marqueeContainer}>
                        <div className={css.marqueeContent}>
                            {companyLogos.map((logo, index) => (
                                <div key={index} className={css.logoItem}>
                                    <Image draggable={false} width={240} height={100} src={logo} alt={`Company ${index + 1}`} />
                                </div>
                            ))}
                            {companyLogos.map((logo, index) => (
                                <div key={index} className={css.logoItem}>
                                    <Image draggable={false} width={240} height={100} src={logo} alt={`Company ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </ContentWidth>
            </section></>
    )
}

export default CompaniesLogosCarousel


const companyLogos = [
    '/assests/newImage/landingpage/companies/Frame 1984083116.png',
    '/assests/newImage/landingpage/companies/Frame 1984083117.png',
    '/assests/newImage/landingpage/companies/Frame 1984083118.png',
    '/assests/newImage/landingpage/companies/Frame 1984083119.png',
    '/assests/newImage/landingpage/companies/Frame 1984083120.png',
    '/assests/newImage/landingpage/companies/Frame 1984083121.png',
    '/assests/newImage/landingpage/companies/Frame 1984083122.png',
    '/assests/newImage/landingpage/companies/Frame 1984083123.png',
    '/assests/newImage/landingpage/companies/Frame 1984083124.png',
    '/assests/newImage/landingpage/companies/Frame 1984083125.png',
    '/assests/newImage/landingpage/companies/Frame 1984083126.png',
    '/assests/newImage/landingpage/companies/Frame 1984083127.png',
    '/assests/newImage/landingpage/companies/Frame 1984083128.png',
    '/assests/newImage/landingpage/companies/Frame 1984083129.png',
    '/assests/newImage/landingpage/companies/Frame 1984083130.png',
    '/assests/newImage/landingpage/companies/Frame 1984083131.png',
    '/assests/newImage/landingpage/companies/Frame 1984083132.png',
    '/assests/newImage/landingpage/companies/Frame 1984083133.png',
    '/assests/newImage/landingpage/companies/Frame 1984083134.png',
    '/assests/newImage/landingpage/companies/Frame 1984083135.png'
];
