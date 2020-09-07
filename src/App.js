import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
class App extends Component{
state={advice:''};
componentDidMount(){
  console.log('component did mount');
  this.fetchAdvice();
}
fetchAdvice=()=>{
  Axios.get('https://api.adviceslip.com/advice')
  .then((response)=>{
    const {advice}=response.data.slip;
    this.setState({advice})
    console.log(advice)
  })
  .catch((error)=>{
    console.log(error)
  })
}
  render(){
    const {advice}=this.state;
    return (
      <>
      
      <div className="App">
     
        <div className="card">
         
          <button className="button" onClick={this.fetchAdvice}>
            <span>Word Of Wisdom!</span>
          </button>
          <h1 className="heading" >
          {advice} 
          </h1>
        </div> 
      </div>
      </>
    );
  }
}
export default App;
