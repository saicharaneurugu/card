import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo.js'
import MyComponent from './MyComponent.js'

class App extends Component {

 constructor(props){
  super(props)
  this.state = {positiveValue: 0,negativeValue:0};
 }

 myFunction=(counter)=>{
    if(counter===1){
      this.setState({positiveValue:this.state.positiveValue+1})
    }else if(counter===-1){
      this.setState({negativeValue:this.state.negativeValue+1})
    }
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4> Total Positive Button clicked = {this.state.positiveValue} times</h4>
          <h4> Total Negative Button clicked = {this.state.negativeValue} times</h4>
          <h5> Total sum of Button clicked = {this.state.positiveValue + this.state.negativeValue} times </h5>
        </header>

        <MyComponent incrementName="+1 Increment" decrementName="-1 Decrement" myFunction={this.myFunction}/>

        <MyComponent incrementName="+1 Increment" decrementName="-1 Decrement" myFunction={this.myFunction}/>
        
        <MyComponent incrementName="+1 Increment" decrementName="-1 Decrement" myFunction={this.myFunction}/>
        <Demo></Demo>

      </div>
      
      
  

    );
  }

}
export default App;
