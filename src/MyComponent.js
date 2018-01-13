import React, { Component } from 'react';

class MyComponent extends Component {

  constructor(props){
    super(props) 
    this.state={myCounter:0};
  }

   increment=()=>{
    this.props.myFunction(1)
    this.setState({
    myCounter:this.state.myCounter+1
    })
  }

  decrement=()=>{
    this.props.myFunction(-1)
    this.setState({
    myCounter:this.state.myCounter-1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}> {this.props.incrementName}</button>
        <b> {this.state.myCounter} </b>
        <button onClick={this.decrement}> {this.props.decrementName}</button>
      </div>
    );
  }
}

export default MyComponent;
