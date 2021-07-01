import './App.css';
import Menu from './components/Menu';
import Card from './components/Card';
import Drawer from './components/Drawer';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    <div>
       <Menu />
       <Drawer />
       <h3>Shop For You</h3>
       <Card />
     </div>

    );
  }
}
