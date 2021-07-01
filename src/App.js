import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    <div>
       <Header />
       <h3>Shop For You</h3>
       <Card />
     </div>

    );
  }
}
