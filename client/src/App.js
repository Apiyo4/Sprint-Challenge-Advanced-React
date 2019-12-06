import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/api/players")
  //   .then(res=> console.log(res))
  //   .catch(err=> console.log(err))
  // })
  constructor(){
    super();
    this.state= {
      player : [],
    }
  }
  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
      .then(res=>{
        // console.log(res.data)
        this.setState({
         player: res.data
        })
        // console.log(this.state.player)
      } )
      .catch(err=> console.log(err))
      // console.log(this.state.player)
  }
  render(){
    return (
      <div className="App">
      {console.log(this.state.player)}
        Welcome
      </div>
    );
  }
  
}


