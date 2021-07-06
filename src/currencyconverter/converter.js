import React, { useEffect, useState } from 'react';

var a=1.218049,b=88.846081;
export default function CurrencyConverter(){
    const[state,setState]=useState();
    const[state1,setState1]=useState();
    const[v1,setV1]=useState();
    const[s,setS]=useState('INR')
    const[s1,setS1]=useState('USD')
    useEffect(()=>{
        // fetch("http://api.currencylayer.com/live?access_key=00bf9af1e6e24cba24f8a92bcdca85a5")
        fetch("http://api.exchangeratesapi.io/v1/latest?access_key=52da37870b249b88682ca7086c2e84a1")
        .then(r=>r.json())
       // .then(v=>console.log(v.rates))
        .then(setV1)
    },[])
    function price(e){
    //     const s=document.getElementById("s")
    //   console.log(s.value)
        const val=e.target.value
        setState1(val)
        // if(val<0){
        //     document.getElementById("i").value=''
        //     return
        // }
        if(val===''||val<0)
        setState('')
        else{
            let i=b/a*val
            if(i-Math.floor(i)==0)
            setState(i)
            else
        setState(i.toFixed(2))
    }
    }
    function price1(e){
        //     const s=document.getElementById("s")
        //   console.log(s.value)
            const val=e.target.value
            setState(val)
            // if(val<0){
            //     document.getElementById("i").value=''
            //     return
            // }
            if(val===''||val<0)
            setState1('')
            else{
                let i=a/b*val
                if(i-Math.floor(i)==0)
                setState1(i)
                else
            setState1(i.toFixed(2))
        }
        }
    function t1(e){
        a=v1.rates[e.target.value]
        setS1(e.target.value)
        // console.log(s)
    }
    function t2(e){
        b=v1.rates[e.target.value]
        setS(e.target.value)
        // console.log(s)
    }
    return(
        <div>
        <select  onChange={t1}>
            {v1&&
             Object.keys(v1.rates).map((v,i)=>(
                 (v==="USD"&&
                 <option key={i} selected>{v}</option>)||(v!==s&&
                  <option key={i}>{v}</option>)
             )
             )}
        </select>
        <input type="number"  value={state1} onInput={price}/>
        <div>
        <select  onChange={t2}>
        {v1&&
             Object.keys(v1.rates).map((v,i)=>(
                 (v==="INR"&&
                 <option key={i} selected >{v}</option>)||(v!==s1&&
                  <option key={i}>{v}</option>)
             )
             )}
        </select>
        <input type="number" onInput={price1} value={state}/></div>
        </div>
    )
} 
