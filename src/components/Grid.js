import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './SimpleCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <SimpleCard />
        </Grid>
        <Grid item xs>
          <SimpleCard />
        </Grid>
        <Grid item xs>
          <SimpleCard />
        </Grid>
      </Grid>
    </div>
  );
}