import React from 'react';
import './tictactoe.css'
function TicTacToe() {
    return(
        <div>
            <div id="turn">
            X turn...
            </div>
            <div id="table">
                <table>
                    <tbody>
                    <tr>
                        <td  onClick={()=>click(0)} className="cell"><span className="summa"></span></td>
                        <td  onClick={()=>click(1)} className="cell"><span className="summa"></span></td>
                        <td onClick={()=>click(2)} className="cell"><span className="summa"></span></td>
                    </tr>
                    <tr>
                        <td onClick={()=>click(3)} className="cell"><span className="summa"></span></td>
                        <td onClick={()=>click(4)} className="cell"><span className="summa"></span></td>
                        <td onClick={()=>click(5)} className="cell"><span className="summa"></span></td>
                    </tr>
                    <tr>
                    <   td onClick={()=>click(6)} className="cell"><span className="summa"></span></td>
                        <td onClick={()=>click(7)} className="cell"><span className="summa"></span></td>
                        <td onClick={()=>click(8)} className="cell"><span className="summa"></span></td>
                    </tr></tbody>
                </table>
            </div>
            <div id="result"></div>
            <button onClick={restart} id="button">restart</button>
        </div>
    )
}
var x=true
var count=0
var d=0
function restart() {
    const e=document.getElementsByClassName("summa")
    document.getElementById("result").innerText=""
    for(let i=0;i<e.length;i++){
        e[i].innerText=""
    }
    document.getElementById("button").style.display=""
    document.getElementById("turn").innerText="X turn..."
    count=0
    d=0
    x=true
}
function  click(i) {
    const v=document.getElementsByClassName("summa")[i]
    if(v.innerText!=="") return
    d++
    count++
    const t=document.getElementById("turn")
    t.innerText==="X turn..."?t.innerText="O turn...":t.innerText="X turn..."
    x?v.innerText="X":v.innerText="O"
    if(count>=5) checkresult(x,i)
    x=!x
}
function checkresult(x,i) {
    var v=""
    x?v="X":v="O"
    const cell=document.getElementsByClassName("summa")
    const r=document.getElementById("result")
    if(i===0){
        if((cell[1].innerText===v&&cell[2].innerText===v)||(cell[3].innerText===v&&cell[6].innerText===v)||(cell[4].innerText===v&&cell[8].innerText===v)){
            r.innerText=`${v} is winner`
        }
    }
    else if(i===1){
        if((cell[0].innerText===v&&cell[2].innerText===v)||(cell[4].innerText===v&&cell[7].innerText===v))
        r.innerText=`${v} is winner`
    }
    else if(i===2){
        if((cell[1].innerText===v&&cell[0].innerText===v)||(cell[4].innerText===v&&cell[6].innerText===v)||(cell[5].innerText===v&&cell[8].innerText===v))
        r.innerText=`${v} is winner`
    }
    else if(i===3){
        if((cell[0].innerText===v&&cell[6].innerText===v)||(cell[4].innerText===v&&cell[5].innerText===v))
        r.innerText=`${v} is winner`
    }
    else if(i===4){
        if((cell[8].innerText===v&&cell[0].innerText===v)||(cell[2].innerText===v&&cell[6].innerText===v)||(cell[5].innerText===v&&cell[3].innerText===v)||(cell[1].innerText===v&&cell[7].innerText===v))
        r.innerText=`${v} is winner`
    }
    else if(i===5){
        if((cell[3].innerText===v&&cell[4].innerText===v)||(cell[2].innerText===v&&cell[8].innerText===v))
        r.innerText=`${v} is winner`
    }
    else if(i===6){
        if((cell[3].innerText===v&&cell[0].innerText===v)||(cell[4].innerText===v&&cell[2].innerText===v)||(cell[7].innerText===v&&cell[8].innerText===v))
        r.innerText=`${v} is winner`
    }
    else if(i===7){
        if((cell[8].innerText===v&&cell[6].innerText===v)||(cell[1].innerText===v&&cell[4].innerText===v))
        r.innerText=`${v} is winner`
    }
    else if(i===8){
        if((cell[4].innerText===v&&cell[0].innerText===v)||(cell[7].innerText===v&&cell[6].innerText===v)||(cell[5].innerText===v&&cell[2].innerText===v))
        r.innerText=`${v} is winner`
    }
    if(r.innerText!=="") {document.getElementById("button").style.display="flex"
    document.getElementById("turn").innerText=""}
    else if(d===9) {r.innerText="DRAW"
    document.getElementById("button").style.display="flex"
    document.getElementById("turn").innerText=""
}
}
export default TicTacToe;