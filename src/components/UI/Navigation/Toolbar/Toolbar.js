import React from 'react';
import classes from './Toolbar.css';

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            {props.children}
        </div>
    );
};

export default Toolbar;