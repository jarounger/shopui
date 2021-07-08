import React from 'react';
import Typography from '@material-ui/core/Typography';
import shirt from './shirt.svg';
import './Card.css';

export default function Card() {
    return (
        <div className="card">
            <img alt="shirt" src={shirt} />
            <Typography gutterBottom variant="h5">
                T-Shirt
            </Typography>
            <Typography variant="h6" color="textSecondary">
                15.00 EUR
            </Typography>
        </div>
    );
}
