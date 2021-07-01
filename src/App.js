import './App.css';
import Menu from './components/Menu';
import Card from './components/Card';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    <div>
       <Menu />
       <h1>Shop For You</h1>
       <Card />
     </div>

    );
  }
}
