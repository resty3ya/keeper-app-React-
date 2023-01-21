import React from "react";


const customStyle={
    background: "#fff",
    borderRadius:"7px",
    boxShadow: "0 2px 5px #ccc",
    float: "left",
    padding: "10px",
    width: "240px",
    margin: "16px",
    
}

const fontStyleH1 = {
    fontSize:"1.1rem",
    marginBottom:"6px"
}


const fontStyle={
    fontSize: "1.1rem",
    marginBottom: "10px",
}

function Note(props){
    return <div style={customStyle}>
        <h1 style={fontStyleH1}>{props.title}</h1>
        <p style={fontStyle}>{props.description}</p>
        <button onClick={()=>{
            props.onChecked(props.id)
        }}>Remove</button>
    </div>
}


export default Note;