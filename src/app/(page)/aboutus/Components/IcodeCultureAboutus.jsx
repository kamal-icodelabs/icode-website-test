import React, { useState, useEffect } from 'react'
import css from '../aboutUs.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth';
import Slider from 'react-slick';
import team1 from "../../../../assets/imgs/images/aboutus/team1.png";
import team2 from "../../../../assets/imgs/images/aboutus/team2.png";
import team3 from "../../../../assets/imgs/images/aboutus/team3.png";
import team4 from "../../../../assets/imgs/images/aboutus/team4.png";
import team5 from "../../../../assets/imgs/images/aboutus/team5.png";
import team6 from "../../../../assets/imgs/images/aboutus/team6.png";
import team7 from "../../../../assets/imgs/images/aboutus/team7.png";
import team8 from "../../../../assets/imgs/images/aboutus/team8.png";
import team9 from "../../../../assets/imgs/images/aboutus/team9.png";
import team10 from "../../../../assets/imgs/images/aboutus/team10.png";
import IconCollection from '@/component/IconCollection/IconCollection';
import Image from 'next/image';

// Custom arrow components for slider
const SampleNextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
    >
        <IconCollection name="slider_next" />
    </div>
);

const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
    >
        <IconCollection name="slider_prev" />
    </div>
);

const IcodeCultureAboutus = () => {
    // Gallery images array (flat structure)
    const galleryImages = [
        {
            id: "img1",
            src: team1,
            alt: "Team collaboration",
            size: "large",
        },
        {
            id: "img4",
            src: team10,
            alt: "Creative workspace",
            size: "small",
        },

        {
            id: "img2",
            src: team2,
            alt: "Modern office space",
            size: "small",
        },
        {
            id: "img6",
            src: team6,
            alt: "Modern office space img6",
            size: "large",
        },
        {
            id: "img3",
            src: team3,
            alt: "Team meeting",
            size: "medium2x",
        },
        {
            id: "img3",
            src: team7,
            alt: "Team meeting",
            size: "medium",
        },

        {
            id: "img4",
            src: team4,
            alt: "Creative workspace",
            size: "medium",
        },
        {
            id: "img4",
            src: team8,
            alt: "Creative workspace",
            size: "large",
        },
        {
            id: "img1",
            src: team5,
            alt: "Team collaboration",
            size: "large",
        },

        {
            id: "img3",
            src: team9,
            alt: "Team meeting",
            size: "small",
        },
    ];

    // Create slides from flat array (2 images per slide, 1 column per slide)
    const createSlidesFromImages = (images) => {
        const slides = [];
        const imagesPerSlide = 2; // exactly two images per slide

        for (let i = 0; i < images.length; i += imagesPerSlide) {
            const slideImages = images.slice(i, i + imagesPerSlide);
            slides.push({
                id: `slide-${Math.floor(i / imagesPerSlide)}`,
                images: slideImages,
            });
        }

        return slides;
    };

    // Size -> explicit height mapping (drives per-image height)
    // Add more aliases as needed (e.g., large2x, small2x) to target 770/450/400/350/300
    const sizeToHeight = {
        large3x: 770, // full column height (single-image slide)
        large: 450,
        medium2x: 400,
        medium: 350,
        small: 300,
    };

    const getHeightClass = (height) => {
        switch (height) {
            case 770:
                return css.galleryItemFull;
            case 450:
                return css.galleryItemLarge;
            case 400:
                return css.galleryItemH400;
            case 350:
                return css.galleryItemH350;
            case 300:
            default:
                return css.galleryItemMedium;
        }
    };

    const createOptimalLayout = (images) => {
        const columns = [[], [], [], []];
        const columnHeights = [0, 0, 0, 0];
        const totalHeight = 770;
        const gapSize = 20;

        // Define actual pixel heights for each image size
        const sizeHeights = {
            small: 200, // Small images: 200px
            medium: 300, // Medium images: 300px
            large: 450, // Large images: 450px
        };

        images.forEach((image) => {
            const imageHeight = sizeHeights[image.size] || 200;
            const gapNeeded = columnHeights.some((height) => height > 0)
                ? gapSize
                : 0;
            const totalNeeded = imageHeight + gapNeeded;

            // STRICT: Only add to columns that have less than 2 images
            let minHeightIndex = -1;
            let minHeight = Infinity;

            // Find column with minimum height that has less than 2 images
            for (let i = 0; i < 4; i++) {
                if (columns[i].length < 2) {
                    if (columnHeights[i] < minHeight) {
                        minHeight = columnHeights[i];
                        minHeightIndex = i;
                    }
                }
            }

            // If all columns have 2 images, skip this image
            if (minHeightIndex === -1) {
                return; // Skip this image - all columns are full
            }

            // Add the image to the selected column
            columns[minHeightIndex].push(image);
            columnHeights[minHeightIndex] += totalNeeded;
        });

        return columns;
    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 12000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        draggable: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2.5, slidesToScroll: 1 } },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false },
            },
            {
                breakpoint: 660,
                settings: { slidesToShow: 1.5, slidesToScroll: 1, centerMode: false },
            },
            {
                breakpoint: 520,
                settings: { slidesToShow: 1.1, slidesToScroll: 1, centerMode: false },
            },
            { breakpoint: 420, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };


    // State for responsive slidesToShow
    const [slidesToShow, setSlidesToShow] = useState(4.5);

    // Handle window resize for responsive slidesToShow
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 1024) setSlidesToShow(4.5);
            else if (width > 600) setSlidesToShow(2.5);
            else if (width > 320) setSlidesToShow(1.2);
            else setSlidesToShow(1);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <section className={css.teamContainer}>
                <ContentWidth className={css.teamContent}>
                    <div className={css.teamTopHeading}>
                        <h2 className={css.teamHeading}>
                            A Culture That Inspires
                            <br className={css.teamPoint} /> Life at iCodeLabs
                        </h2>
                        <p className={css.teamSubheading}>
                            We believe strong teams are built on trust, culture, and shared
                            experiences — that’s why we celebrate both our wins and our
                            everyday moments together
                        </p>
                    </div>
                </ContentWidth>

                <div className={css.teamSlider}>
                    <div className={css.teamCard}>
                        <Slider {...settings}>
                            {createSlidesFromImages(galleryImages).map((slide) => (
                                <div key={slide.id}>
                                    {/* Single column: exactly two images per slide */}
                                    <div className={css.galleryColumn}>
                                        {slide.images.map((image, idx, arr) => {
                                            const heightForImage = sizeToHeight[image.size] ?? 300;
                                            const heightClass = getHeightClass(heightForImage);
                                            // If full-height requested, render single item and ignore the rest in this slide
                                            if (heightForImage === 770) {
                                                return idx === 0 ? (
                                                    <div
                                                        key={image.id}
                                                        className={`${css.galleryItem} ${heightClass}`}
                                                    >
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            loading="lazy"
                                                        />
                                                        <div className={css.galleryOverlay} />
                                                    </div>
                                                ) : null;
                                            }
                                            return (
                                                <div
                                                    key={image.id}
                                                    className={`${css.galleryItem} ${heightClass}`}
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        loading="lazy"
                                                    />
                                                    <div className={css.galleryOverlay} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IcodeCultureAboutus