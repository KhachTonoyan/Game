import React from "react";

export default ({id, active, clickHandler, color}) => {
    if(active) return (
        <div className="item" style={{backgroundColor:"blue"
        }} onClick={() => active && clickHandler(id)}/>
    )
    return(
        <div className="item" style={{backgroundColor:color || "white"
        }} onClick={() => active && clickHandler(id)}/>
    )
}

