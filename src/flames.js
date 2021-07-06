import React, { useState } from 'react';

function Flames(){
    const [relation,setRelation]=useState()
    function status(){
        var a=document.getElementsByClassName("i")[0].value
        var b=document.getElementsByClassName("i")[1].value
        if(a===''||b===''){
            setRelation('Please Enter valid input')
            return
        }
        var c=0
        var d=a.length+b.length
        // console.log(d)
        for(let i=0;i<a.length;i++){
            //console.log(a[i])
        if(b.includes(a[i])) {b=b.replace(a[i],0)
            c+=2
        }
    }
    //console.log(c)
    const v=(d-c)%6
     if(v==1) setRelation("Friends")
     else if(v==2) setRelation("Love")
     else if(v==3) setRelation("Affection")
     else if(v==4) setRelation("Marriage")
     else if(v==5) setRelation("Enemy")
     else setRelation("Siblings")
     }
     function reset(){
        document.getElementsByClassName("i")[0].value=''
        document.getElementsByClassName("i")[1].value=''
        setRelation()
     }
return(
    <div id="main">
    <input className="i" data-testid="input1" type="text"/>
    <input className="i" data-testid="input2" type="text"/>
    <button data-testid="calculate_relationship" onClick={status}>Calculate Relationship Future</button>
    <button data-testid="clear" onClick={reset}>Clear inputs and relationship status</button>
    <div><h3  data-testid="answer">{relation}</h3></div>
    </div>
)
}
export default Flames;