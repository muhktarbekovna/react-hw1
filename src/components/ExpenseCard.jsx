import React from 'react';
import classes from './ExpenseCard.module.css'

const ExpenseCard = (props) => {
    const name = props.name
    const username = props.username
    const city = props.city
    return (
        <div className={classes.card}>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>city: {city}</div>
        </div>
    );
};

export default ExpenseCard;