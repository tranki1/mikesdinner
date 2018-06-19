import React from 'react';
import classes from './NavigationItem.css';
import Aux from '../../../../../hoc/Aux/Aux';
const navigationItem = (props) => {
    return (
        <Aux>
            <li className={classes.NavigationItem}>
                <a 
                    href={props.link}
                    className={props.active ? classes.active :null}>{props.children}</a>
            </li>
        </Aux>
    );
};

export default navigationItem;