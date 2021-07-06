import React, { useState } from 'react';
var l=[]
export default function App(){
    const[list,setList]=useState()
    var v;
    function save(){
        if(v===undefined||v.value==='') return
        // l=localStorage.getItem('list')
        // console.log(l);
        // if(l!=null)
        // {
            
        // }
        // else{
        //     l=[]
        //     l.push(v.value)
        // } 
        // localStorage.setItem('list',l)
        //l=[v.value,...l]
        l=[...l,v.value]
        // l.unshift(v.value)
        // l=[...l]
        setList(l)
        v.value=''
    }
    function change(e){
        v=e.target
    }
    function deleted(i){
        l.splice(i,1)
        l=[...l]
        setList(l)
        // console.log(l);
    }
    function edit(e){
        if(v===undefined||v.value==='') return
        l.splice(e.target.value,1,v.value)
        l=[...l]
        setList(l)
        v.value=''
    }
    return(
        <div id="main">
        <h2>To-Do-List</h2>
        <textarea id="task" onChange={change}/>
        <div>
        <button id="btn" onClick={save}>save</button></div>
        <div>
            <ol>
        {list&&list.map((item,i)=>(
            <div>
           <li className='list' key={i}>{item}</li>
           <button onClick={edit} value={i}>edit</button>
           <button onClick={()=>deleted(i)}>delete</button>
           </div>
        ))}</ol>
        </div>
        </div>
    )
}