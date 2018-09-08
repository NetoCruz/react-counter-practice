import React, { Component } from 'react';
import NavBar from './components/navbar.jsx';
import  Counters from './components/counters.jsx';
import './App.css';

class App extends Component {
  state={
  counters:[
    {id:1, value:0},
    {id:2, value:0},
    {id:3, value:0},
    {id:4, value:0}

  ]
};
    handleIncrement=counter=>{
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
    };
    handleReset=()=>{
     const counters =this.state.counters.map(c=>{
      c.value=0;
      return c;
     });
    };

  // handleDelete=(counterId)=>{

  // };
  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
      <main className="container">
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
