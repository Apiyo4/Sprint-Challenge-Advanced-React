import React, { useState } from 'react';
import {useInput} from '../hooks/index'

function Input(props){
    const [searchItem, onValueChange, onSearch] = useInput('');
    console.log(props.players)
    

    return(
        <div>
            <form onSubmit={onSearch}>
                <label>
                <input value ={searchItem} onChange={onValueChange}/>
                <button type="submit">Search</button>
                </label>
            </form>
        </div>
    )
}
export default Input;
