import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import Badge from '@material-ui/core/Badge';
import useCounter from './useCounter'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

 export default function SimpleCard() {
    
    
    const classes = useStyles();
    const icon = <img alt='logo' src={logo} />;

    const { counter, increment } = useCounter();

    return (
        <div className={classes.root}>
            <Card className={classes.paper}>
                <CardContent>
                    <img alt="logo" src={logo} />
                    <Typography gutterBottom variant="h5" component="h2">
                        T-Shirt
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        15.00 €
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary" variant='contained' onClick={increment}>In den Warenkorb</Button>
                    <Badge color="secondary" badgeContent={counter}>
                        {icon}
                    </Badge>
                </CardActions>
            </Card>
        </div>
    );
}
