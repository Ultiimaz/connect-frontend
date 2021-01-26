import React from 'react';
import * as propTypes from "prop-types";

const Game = props => {
    let classes = props.number1 ? " card-lighter mt-5 pb-5 z-10 -mx-5 rounded-sm" : "card-light mb-5 rounded-sm";
    return (<div className={classes + " w-1/4 h-100 justify-center"}>
        <div className={"h-3/4"}>
            <img src={props.logo} className={"max-h-full mx-auto mt-2"} alt={props.game}/>
        </div>
        <div className={"h-1/4 mt-5 ml-2 mb-1"}>
            <div className="flex-12 pb-5">
                <span>{props.game}</span>
            </div>
            <button className="text-white bg-dark px-5 px-3">Add to games</button>
        </div>
    </div>)
}
Game.propTypes = {
    game: propTypes.string,
    logo: propTypes.string
};
const Home = props => {
    debugger;
    let games =  [
        {
            game: "Apex Legends",
            game_logo: "https://i.pinimg.com/564x/ce/70/9e/ce709ea00c14c59f05fda449e8fa2f16.jpg"
        },
        {
            game:"Minecraft",
            game_logo: "https://thumbs.dreamstime.com/b/minecraft-logo-online-game-dirt-block-illustrations-concept-design-isolated-186775550.jpg"
        },
        {
            game:"League of Legends",
            game_logo: "./public/league.png"
        }
    ];
    return (
        <>
            <div className="p-10">
                <div className="bg-dark w-100 m-auto p-10">
                    <span className="text-white w-100 flex justify-center text-3xl">See whats hype!</span>
                    <div className={"flex justify-center w-100 h-full bg-dark"}>
                        <Game game={games[0].game} logo={games[0].game_logo}/>
                        <Game game={games[1].game} logo={games[1].game_logo} number1/>
                        <Game game={games[2].game} logo={games[2].game_logo} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
