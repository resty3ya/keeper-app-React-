import React from "react";

const footerStyle={
    position:"absolute",
    textAlign:"center",
    bottom: "0",
    width: "100%",
    height:"2.5rem"
}

const paragraphStyle={
    color:"#ccc"
}

function Footer(){

    const date = new Date();


    return <footer style={footerStyle}>
        <p style={paragraphStyle}>Copyright {date.getFullYear()}</p>
    </footer>
}

export default Footer;

