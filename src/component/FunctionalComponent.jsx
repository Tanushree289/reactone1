import React from "react";
const FunctionalComponent = () =>{

    const [item1,setitem1] = React.useState(false)
    const hideShow = () => setitem1(!item1)
    return(
        <div className="funItem">
            <button className="sub1" onClick={hideShow}>To see styling in functional component</button>
            {item1 && 
                (<div className="funDiv">
                   <h1 className="head">This is creates using Functional component</h1>
                   <p className="para1">This is done using External CSS</p>
                   <p style={{color:"blue", fontSize:'25px',fontWeight:'bold'}}>This is done using inline CSS</p>
                </div>)}
        </div>
    )
}

export default FunctionalComponent;