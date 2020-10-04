import React, {useState} from "react";
import Item from "./Item"

let player = 0;
let AI = 0;
let random = null;
let timerID;

export default ({gameMode,userWin,compWin}) => {
    const [items,setItems] = useState({});
    const {field, delay} = gameMode.config;
    const count = field**2;

    const clear = () =>{
        player = 0;
        AI = 0;
        random = null;
        clearTimeout(timerID)
        gameMode.reset = false;
        setItems({});
    };
    if(gameMode.reset){
        clear();
        return;
    }
    if(player > count/2){
        clear();
        userWin(gameMode.name);
        return;
    }
    if(AI > count/2){
        clear();
        compWin();
        return;
    }
    random = Math.round(Math.random() * count);
    while (items[random]){
        random = Math.round(Math.random() * count)
    }
    items[random] = "blue";

    timerID = setTimeout(() => {
        if(items[random] === "blue") {
            items[random] = "red";
            AI++;
            setItems({...items})
        }
    },delay);

    const clickHandler = (id) => {
        if(items[id] !== "red"){
            clearTimeout(timerID);
            player++;
            items[id] = "green";
            setItems({...items})
        }
    };

    return(
        <div className={"gameArea"}>
            <div style={{textAlign: "center"}}>
                {gameMode.name + " - Computer"}
            </div>
            <div>
                {Array.from(Array(count))
                    .map((_,i) => {
                        if((i+1)%field === 0){
                            if(random === i) return <span key={i}><Item id={i}  active={true} clickHandler={clickHandler}/><br/></span>
                            return <span key={i}><Item id={i} key={i} clickHandler={clickHandler} color={items[i] || ""}/><br/></span>
                        }
                        if(random === i) return <Item id={i} key={i} active={true} clickHandler={clickHandler}/>
                        return <Item id={i} key={i} clickHandler={clickHandler} color={items[i] || ""}/>
                })}
            </div>
        </div>
    )
}