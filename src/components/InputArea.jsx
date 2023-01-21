import React, {useState} from "react";

const customStyle={
    background: "#fff",
    borderRadius:"7px",
    boxShadow: "0 2px 5px #ccc",
    float: "left",
    padding: "10px",
    width: "240px",
    margin: "16px",
    
}



function InputArea(props){
    const [inputText, setInputText] = useState({title:"",
    description:""})

    function handleChange(event){
        const{name, value} = event.target;
        setInputText((prevValue)=>{
            return {...prevValue,
                [name]:value};
        });
    }

    return <div className="form" style={customStyle}>
        <input
        type="text"
        name="title"
        value={inputText.title}
        placeholder="title"
        onChange={handleChange}>
        
        </input>
        <input
        type="text"
        name="description"
        value={inputText.description}
        placeholder="take a note"
        onChange={handleChange}>
        
        </input>
        <button onClick={()=>{
            props.onAdd(inputText)
        }}>Add</button>
    </div>;
}

export default InputArea;