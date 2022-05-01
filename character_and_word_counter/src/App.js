import React, { Component } from "react";

class MyApp extends Component{
    state = {
        text: ""
    };
    render(){
        

        return(
            <div className="app">
                < div className="heading">CHARACTER & WORD COUNTER</div>
                
                <textarea id="text-box" onChange={e=> this.setState({text : e.target.value})} />
                
                <div className="output">
                    <div id="char-count" ><b>{this.state.text.length}</b> Character(s)</div>
                    <div id="word-count"><b>{this.state.text ? this.state.text.match(/\w+/gim).length : 0}</b> Word(s)</div>
                </div>
                
            </div>

        )
    }
}

export default MyApp;