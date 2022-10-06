import React from "react";

class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            item1:false,
            setitem1:false
        }
    }
    hideShow = ()=>{
        const data = this.state.item1;
        this.setState({item1:!data,setitem1:true})
    }
    
    render(){
          return(
            <div>
                <button className="sub2" onClick={this.hideShow}>To see styling in class component</button>
                {this.state.item1 && 
                (<div className="classDiv">
                   <h1 className="head">This is creates using Class component</h1>
                   <p className="para1">This is done using External CSS</p>
                   <p style={{color:"blue", fontSize:'25px',fontWeight:'bold'}}>This is done using inline CSS</p>
                </div>)}
            </div>
          )
    }
}

export default ClassComponent;