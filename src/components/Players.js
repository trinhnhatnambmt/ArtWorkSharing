import React, { Component } from "react";
import { Artists } from "../shared/ListOfArtists";
import { useState } from "react";
export default function Player() {
    const [player, setPlayer] = useState([]);
    return (
        <div className="container">
            {Artists.map((player) => (
                <div className="column" key={player.id}>
                    <div className="card">
                        <img src={player.img} />
                        <h3>{player.name}</h3>
                        <p className="title">{player.masterpiece}</p>
                        <p>
                            <button
                                onClick={() => {
                                    setPlayer(player);
                                }}
                            >
                                <a href="#popup1" id="openPopUp">
                                    Detail
                                </a>
                            </button>
                        </p>
                    </div>
                </div>
            ))}

            <div id="popup1" className="overlay">
                <div className="popup">
                    <img src={player.img}></img>
                    <h2>{player.name}</h2>
                    <a className="close" href="#">
                        &times;
                    </a>
                    <div className="content">{player.info}</div>
                </div>
            </div>
        </div>
    );
}
