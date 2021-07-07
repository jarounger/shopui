import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import shirt from './shirt.svg';
import './Card.css';

export default function Card() {
    return (
        <div className="card">
            <img alt="logo" src={shirt} />
            <Typography gutterBottom variant="h5">
                T-Shirt
            </Typography>
            <Typography variant="h6" color="textSecondary">
                15.00 EUR
            </Typography>
            <Button size='small' color="secondary" variant='contained'>In den Warenkorb</Button>
        </div>
    );
}
