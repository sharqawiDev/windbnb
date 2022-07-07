import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import StayCard from "./components/StayCard/StayCard";
import { Card } from "./types";

function App() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getStaysData();
    }, []);

    const getStaysData = async () => {
        const json = require("../assets/data/stays.json");
        setCards(json);
    };
    return (
        <div className="container">
            <Header />
            <div className="stays-title">
                <h3>Stays in Finland</h3>
                <p>+{cards.length} stays</p>
            </div>
            <div className="cards-container">
                {cards.map((card: Card) => (
                    <StayCard card={card} key={card.title} />
                ))}
            </div>
        </div>
    );
}

export default App;
