import React, { useEffect, useState } from 'react';

export default function Child(props){
    const[state,setState]=useState(0);
    var color=true
    useEffect(()=>{
        setInterval(()=>{
            if(color) setState(0)
            else setState(1)
            color=!color
        },1000)
        // return()=>{

        // }
    },[])
    function change(){
        props.onClick()
        //setState(1)
    }
    return(
    <>
    <p  style={{color:state==0?'green':'red'}}>{props.text}</p>
    <button onClick={change}>change</button>
    </>)
}