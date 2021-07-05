import React from 'react';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './SimpleCard';
import Card from './Card';
import './Grid.css';

export default function AutoGrid() {
  return (
    <div className="root">
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
        <Grid item xs>
          <SimpleCard />
        </Grid>
      </Grid>
    </div>
  );
}