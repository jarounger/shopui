import * as React from 'react';
import logo from './logo.svg';
import './Card.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Card() {

    const [count, setCount] = React.useState(1);

    return (
        <div className="card">
            <img
                alt="logo"
                src={logo}
            />

            <Typography gutterBottom variant="h5" component="h2">
                T-Shirt
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                15.00 €
            </Typography>

            <Button size="small" color="secondary" variant='contained' onClick={() => { setCount(count + 1); }}>In den Warenkorb</Button>
        </div>
    );
}
