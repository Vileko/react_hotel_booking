import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, defualtValue, value, onChange}) => {
    return (
        <select 
            className={classes.mySelect}
            style={{marginTop: '15px'}}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defualtValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;