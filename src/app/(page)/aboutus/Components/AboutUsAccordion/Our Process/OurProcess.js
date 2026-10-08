import ContentWidth from "@/component/ContentWidth/ContentWidth"
import css from "./OurProcess.module.css"
import IconCollection from "@/component/IconCollection/IconCollection"
import React from "react"

const OurProcess = () => {
    return (
        <>
            <div className={css.OurProcessWrapper}>
                <ContentWidth>
                    <div className={css.header}>
                        <span className={css.howIcodeWorks}>
                            How <span>Icode </span> Works

                        </span>
                        <h2 className={css.sectionTitle}>
                            Our Process
                        </h2>
                        <p className={css.sectionSubHeading}>{'No need to settle for okay when we can serve you the best! Our strategies are meticulously crafted to spark creativity, boost engagement, and achieve the impossible.'}</p>
                    </div>

                    <div className={css.contentWrapper}>
                        {
                            ourProcesData.map((i, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={css.itemBox}>
                                            <div className={css.iconContainer}>
                                                <IconCollection name={i.title} />
                                            </div>

                                            <div className={css.contentContianer}>
                                                <h3 className={css.title}>{i.title}</h3>
                                                <p className={css.info}>{i.description}</p>
                                            </div>
                                        </div>

                                    </React.Fragment>
                                )
                            })
                        }


                    </div>
                </ContentWidth>
            </div>
        </>
    )
}

export default OurProcess


const ourProcesData = [
    {

        "title": "Consultation & Ideation",
        "description": "We begin by understanding your vision, goals, and challenges. Through collaborative discussions, we brainstorm innovative ideas and define a clear roadmap that aligns creativity with business objectives."
    },
    {

        "title": "Wireframing & UX/UI Design",
        "description": "Our design experts translate concepts into interactive wireframes and visually appealing interfaces. Every design decision focuses on creating intuitive, user-centered experiences that leave a lasting impression."
    },
    {

        "title": "Development & Testing",
        "description": "With designs finalized, our development team builds robust, scalable solutions using modern technologies. Each feature undergoes thorough testing to ensure top-tier performance, security, and reliability."
    },
    {

        "title": "MVP Launch & Scaling",
        "description": "We launch your Minimum Viable Product to real users, gather feedback, and refine it for improvement. As traction grows, we strategically enhance and scale your product to meet increasing user demands."
    },
    {

        "title": "Ongoing Support & Optimization",
        "description": "After launch, we continue to monitor, maintain, and optimize your product. From feature updates to performance tuning, we ensure it evolves seamlessly with your business growth."
    }
]