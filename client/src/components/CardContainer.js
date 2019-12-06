import React from 'react';
import Input from './Input';

export default class CardContainer extends React.Component{
    render(){
        
        return(
            <div className="playerInfo">
                
                {/* {console.log(this.props)} */}
              <h3>
               Country: {this.props.player.country}
              </h3>
              <h4>
               Name : {this.props.player.name}
              </h4>
              <p>
               Number of searches: {this.props.player.searches }
              </p>
            </div>
        )
    }
}