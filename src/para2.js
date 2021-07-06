import React from 'react';
class Para2 extends React.Component{
    constructor(){
        super()
        this.state={
            v:0
        }
    }
     Para3=()=> {
        this.setState({
            v:1
        })
    }
    render(){
        function Para1(){
            return(
                <p style={{marginLeft:'30%',marginTop:'1%'}} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
                </p>
               ) 
        }
        return(
            <div>
                <button id="click" onClick={this.Para3}>click me</button>
                {this.state.v===1&&(
                    <Para1/>
                )}
            </div>
        )
    }
}
export default Para2;