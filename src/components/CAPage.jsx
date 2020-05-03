import React from 'react';
import { about } from '../data/mdpage';
import {Fade} from 'react-reveal';

const MDPage = () => {
    return (
        <div className="wrapper">
            <div className="about">
                {about.map((item, i) => {
                    const {section, title, text} = item;
                    return (
                        <Fade key={i}>
                            <div className="about__item">
                                <div className="about__section">{section}</div>
                                <div className="about__title">{title}</div>
                                <div className="about__text">{text}</div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    );
};

export default MDPage;