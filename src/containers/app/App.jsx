import React,{Component} from 'react'
import './App.css';
import {connect} from 'react-redux';

const mapStateToProp=((state)=>{
  return{
    // Here we can create props that will be showng state from reducers
  }
});
const mapDispatchToProp=((dispatch)=>{
  return{
    // Here we can create props that wiil dispatch the action to the reducer
  }
});
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default connect(mapStateToProp,mapDispatchToProp)(App);
