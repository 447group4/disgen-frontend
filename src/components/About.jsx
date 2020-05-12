import React from 'react';
import { about } from '../data/about';
import {Fade} from 'react-reveal';
import AboutChart from "./charts/aboutChart";

const About = () => {
    return (
        <div className="wrapper">
            <div className="about">
            <div className="aboutChartDiv">
                <h1 className="aboutChartHeader"> Effects of Gerrymandering  </h1>
                <AboutChart />
                <div className = "aboutChartText">
                    *This chart represents the number of states currently affected by gerrymandering based on "Efficiency Gap",
                    a mathematical way to measure unfair advantage from partisan gerrymandering.
                    Nick Stephanopoulous and Eric McGhee introduced "Efficiency Gap" in their 2015 paper, titled "Partisan
                    Gerrymandering and the Efficiency Gap".
                    The chart uses data from 2017.
                </div>
            </div>
                {about.map((item, i) => {
                    const {section, title, text, text_name, text_about} = item;
                    return (
                        <Fade key={i}>
                            <div className="about__item">
                                <div className="about__section">{section}</div>
                                <div className="about__title">{title}</div>
                                <div className="about__text">{text}</div>
                                <div className="about__text_name">{text_name}</div>
                                <div className="about__text_about">{text_about}</div>

                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    );
};

export default About;
