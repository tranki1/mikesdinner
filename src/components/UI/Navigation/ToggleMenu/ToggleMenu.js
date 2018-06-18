import React from 'react';

import classes from './ToggleMenu.css';

const toggleMenu = (props) => {
    return (
        <div className={classes.ToggleMenu} onClick={props.toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default toggleMenu;