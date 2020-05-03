import React from 'react';
import { Fade } from 'react-reveal';

const Home = () => {

    return (
        <div className="home">
            <Fade>

                    <div className="wrapper">

                        <div className="logo"></div>
                        <div className="prebrandtxt"> A redistricting app brought to you by...</div>
                        <div className="brandlogo"></div>

                    </div>

            </Fade>
        </div>
    );
};

export default Home;