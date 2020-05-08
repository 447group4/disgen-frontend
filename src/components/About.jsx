import React from 'react';
import { about } from '../data/about';
import {Fade} from 'react-reveal';

const About = () => {
    return (
        <div className="wrapper">
            <div className="about">
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