import React from "react";

const customStyle = {
    marginTop: "auto -16px",
    padding:"16px 32px",
    backgroundColor: "#f5ba13",
    color: "white",
    boxShadow:"0 0 10px 0 rgba(0,0,0,0.3)"
}

const fontStyle = {
    fontFamily: "'McLaren', cursive;",
    fontWeight: "400",
}

function Header(){
    return <header style={customStyle}>
    <h1 style={fontStyle}>Keeper</h1>
    
    </header>;
}

export default Header