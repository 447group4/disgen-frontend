import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Nav = props => {
    const {context, history} = props;   
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    );

    return (
        <div className={`main-nav main-nav--${context}`}>
            <NavLink className={getClassName("/mdpage")} exact to="/mdpage">Maryland</NavLink>
            <NavLink className={getClassName("/capage")} exact to="/capage">California</NavLink>
            <NavLink className={getClassName("/about")} exact to="/about">About</NavLink>
        </div>
    );
};

export default withRouter(Nav);