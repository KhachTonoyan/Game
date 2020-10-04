import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import GameSettings from './GameSettings';
import GameArea from './GameArea';
import LeaderBoard from  "./LeaderBoard";
import {myFetch} from "./helper";
import './index.css';

const App = () => {

    const [settings,setSettings] = useState({});
    const [gameMode, setGameMod] = useState("");
    const [winners,setWinners] = useState([]);
    const [winner,setWinner] = useState("");

    useEffect(() => {
        fetch("https://starnavi-frontend-test-task.herokuapp.com/game-settings")
            .then(settingsData => settingsData.json())
            .then(settings => setSettings(settings));
    },[]);

    const gameModeHandler = (mode) => {
        setGameMod({
            reset:gameMode.name && true,
            name:mode.name,
            config:settings[mode.gameMode]
        })
    };

    useEffect(() => {
        fetch("https://starnavi-frontend-test-task.herokuapp.com/winners")
            .then(winnersData => winnersData.json())
            .then(winners => setWinners(winners));
    },[]);

    const compWin = () =>{
        myFetch()
            .then(winners => {
                setWinners(winners)
            });
        setWinner("Computer win")
        setGameMod("")
    };
    const userWin = (name) =>{
        myFetch(name)
            .then(winners => {
                setWinners(winners)
            });
        setWinner(name + " win")
        setGameMod("")
    };
    return (
        <>
        <GameSettings gameModeHandler={gameModeHandler}/>
        <div className={"content"}>
            {(gameMode && <GameArea gameMode={gameMode} compWin={compWin} userWin={userWin}/>) || <h1 className={"winner"}>{winner}</h1>}
            <LeaderBoard winners={winners}/>
        </div>
        </>
    )
};

ReactDOM.render(<App/>,document.getElementById('root'));

