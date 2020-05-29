import React, { Component } from 'react';


export default class AboutUS extends Component{

render(){
    return(
    <div>
        <h1 style={{textAlign: "center"}}>About NotSoFresh</h1>
        <h2 style={{textAlign: "center"}}>
            NotSoFresh is a grocery delivery service aimed at bringing you the groceries
            you want.
        </h2>
        <img
            style={{display: "block", marginLeft: "auto", marginRight: "auto"}}
            src="https://i.imgur.com/s74tASH.jpg"
            alt="logo"
        />
        <ul style={{position: "fixed", bottom: "0"}}>
        <h2 style={{textAlign: "left"}}>Created By:</h2>
        <a
            style={{display: "block", float: "left", padding: "8px"}}
            href="https://github.com/dizhengcindy"
        >
            Cindy Zheng
        </a>
        <a
            style={{display: "block", float: "left", padding: "8px"}}
            href="https://github.com/fosterv2"
        >
            Valerie Foster
        </a>
        <a
            style={{display: "block", float: "left", padding: "8px"}}
            href="https://github.com/theouty"
        >
            Aman Michael
        </a>
        <a
            style={{display: "block", float: "left", padding: "8px"}}
            href="https://github.com/wakennedy"
        >
            William Kennedy
        </a>
        </ul>
    </div>
    )
}
}