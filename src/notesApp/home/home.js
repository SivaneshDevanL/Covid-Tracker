import React from 'react';
import './home.css'
import {useHistory} from 'react-router';

export default function Home(){
    const history=useHistory();
    return(
        <div id='main'>
        <h2>Notes App</h2>
        <input placeholder='username'/>
        <br/>
        <input placeholder='password' type='password'/>
        <div id='flex'>
        <h5>login</h5>
        <h5 onClick={()=>history.push('/sign')}>signup</h5></div>
        </div>
    )
}