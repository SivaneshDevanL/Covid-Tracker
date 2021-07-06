import React,{useState} from 'react';
import Child from './child'

export default function App(){
    const [state,setState]=useState("some random text");
    function change(v){
        setState(v)
    }
    return(
        <Child text={state} onClick={()=>change("text changed")}/>
    )
}