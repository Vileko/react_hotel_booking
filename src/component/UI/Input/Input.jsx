import React from 'react';
import classes from './Input.module.css';

const Input = ({children,...props}) => {
    return (
        <input {...props} className={classes.myInput}>
            {children}
        </input>
    );
};

export default Input;