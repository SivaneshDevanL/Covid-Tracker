import React, { useState } from 'react';
 
function Selection(props){
    let [selectionStyle,updateSelectionStyle]=useState({background:''});
    return(
        <div style={{color:selectionStyle.background}} onClick={()=>props.applyColor(updateSelectionStyle)} className="fix-box">
            <h2  className="subheading" >Selection</h2>
        </div>
    )
}

export default Selection;