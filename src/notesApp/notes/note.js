import React, { useEffect, useState } from 'react';

var v,t;
export default function Notes(){
    const [notes,setNotes]=useState();
    useEffect(()=>{
        fetch("http://localhost:3001")
        .then(x=>x.json())
        .then(setNotes)
    },[])
    function add(){
        if(v===undefined||v.value===''||t===undefined||t.value==='') return
        fetch("http://localhost:3001/add",{
            headers:{'content-type':'application/json'},
            method:'post',
            body:JSON.stringify({
                title:t.value,
                description:v.value
            })
        })
        fetch("http://localhost:3001")
        .then(x=>x.json())
        .then(setNotes)
        t.value=''
        v.value=''
    }
    return(
        <div id="notes">
            <input onChange={(e)=>(t=e.target)}/>
            <textarea onChange={(e)=>(v=e.target)}/>
            <button onClick={add}>add</button>
            {notes&&notes.notes.map((item)=>(
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}