import React from "react";

export default ({gameModeHandler}) => {
    return (
        <div className={"settings"}>
            <form onSubmit={(e) => {
                e.preventDefault()
                e.target[2].innerText = "Play again"
                gameModeHandler({
                    gameMode:e.target[0].value,
                    name:e.target[1].value || "User"
                })
                e.target[1].value = ""
            }}>
                <select>
                    <option value="easyMode">Easy</option>
                    <option value="normalMode">Normal</option>
                    <option value="hardMode">Hard</option>
                </select>
                <input placeholder={"Enter your name"}/>
                <button type='submit'>Play</button>
            </form>
        </div>
    )
}