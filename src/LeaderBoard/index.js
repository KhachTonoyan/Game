import React, {useEffect, useState} from "react";

export default ({winners}) => {
    return(
        <div className={"leaderBoard"}>
            {winners.map((item) => {
                return <div className={"leaderItem"} key={item.id}>{item.winner} {item.date}</div>
            })}
        </div>
    )
}