import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';

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

export default function FullWidthGrid() {
    const classes = useStyles();

    const [count, setCount] = React.useState(1);
  

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>


                <Grid item xs>
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
                            <Button size="small" color="secondary" variant='contained' onClick={() => {setCount(count + 1);}}>In den Warenkorb</Button>
                        </CardActions>
                    </Card>
                </Grid>


                <Grid item xs>
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
                            <Button size="small" color="secondary" variant='contained'>In den Warenkorb</Button>
                        </CardActions>
                    </Card>
                </Grid>


                <Grid item xs>
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
                            <Button size="small" color="secondary" variant='contained'>In den Warenkorb</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs>
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
                            <Button size="small" color="secondary" variant='contained'>In den Warenkorb</Button>
                        </CardActions>
                    </Card>
                </Grid>





            </Grid>
        </div>
    );
}