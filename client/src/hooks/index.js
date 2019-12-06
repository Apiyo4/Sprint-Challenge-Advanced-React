import {useState} from 'react';

export function useInput(){
    const [searchItem, setSearchItem] = useState('');
    const onValueChange= e =>{
        setSearchItem(e.target.value)
        // console.log(e)
    }
    const onSearch = e =>{
        e.preventDefault();
        alert('submit');
        setSearchItem('')
    }
    return [searchItem, onValueChange, onSearch];
}