import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

export default function AutoGrid() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card />
        </Grid>
        <Grid item xs>
          <Card />
        </Grid>
        <Grid item xs>
          <Card />
        </Grid>
        <Grid item xs>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}