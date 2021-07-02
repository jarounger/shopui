import './App.css';
import Typography from '@material-ui/core/Typography';
import Header from './components/Header';
import Grid from './components/Grid';
import { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Typography gutterBottom variant="h5" component="h2"> &nbsp; Shop For You </Typography>
        <Grid />
      </div>
    );
  }
}
