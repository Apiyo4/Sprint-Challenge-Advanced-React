import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CardContainer from './components/CardContainer';
import Input from './components/Input';

export default class App extends React.Component {
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/api/players")
  //   .then(res=> console.log(res))
  //   .catch(err=> console.log(err))
  // })
  constructor(){
    super();
    this.state= {
      players : [],
    }
  }
  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
      .then(res=>{
        this.setState({
         players: res.data
        })
        
      } )
      .catch(err=> console.log(err))
  }
  
  render(){
    return (
      <div className="App">

        {console.log(this.state.players)}
        <h1>Women's World cup Players</h1>
        <Input players={this.state.players} />
        <div className="playersInfo">
          {this.state.players.map(player=>{
            return <CardContainer player={player} key={player.id} />
          })}
        </div>
        
  
        
      </div>
    );
  }
  
}


