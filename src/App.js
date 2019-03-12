import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';

class App extends Component {

  state ={
     data : [{
       name: "diabetic",
       freq : 7
     },
     {
       name: "pain",
       freq : 10
     },
     {
      name: "heart",
      freq : 10
    },
    {
      name: "alzheimer",
      freq : 8
    },
    {
      name: "obese",
      freq : 10
    },
    {
      name: "accident",
      freq : 8
    },
    {
      name: "cancer",
      freq : 4
    }
    ],
     w :1000,
     h : 200
  }

  render() {
    return (
      <div className="App">
      <h1>Text Annotation Visualization</h1>
      
        <BarChart
          data = {this.state.data}
          width = {this.state.w}
          height = {this.state.h}
        />
      </div>
    );
  }
}

export default App;
