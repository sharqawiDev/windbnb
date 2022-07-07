import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import StayCard from "./components/StayCard/StayCard";
import { Card } from "./types";

function App() {
    const card: Card = {
        city: "Helsinki",
        country: "Finland",
        superHost: true,
        title: "Stylist apartment in center of the city",
        rating: 4.4,
        maxGuests: 3,
        type: "Entire apartment",
        beds: 2,
        photo: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    };
    const card2: Card = {
        city: "Helsinki",
        country: "Finland",
        superHost: false,
        title: "Stylist apartment in center of the city",
        rating: 4.4,
        maxGuests: 3,
        type: "Entire apartment",
        beds: null,
        photo: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    };
    const card3: Card = {
        city: "Helsinki",
        country: "Finland",
        superHost: true,
        title: "Stylist apartment in center of the city",
        rating: 4.4,
        maxGuests: 3,
        type: "Entire apartment",
        beds: 2,
        photo: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    };

    return (
        <div className="container">
            <Header />
            <div className="stays-title">
                <h3>Stays in Finland</h3>
                <p>+12 stays</p>
            </div>
            <div className="cards-container">
                <StayCard card={card} />
                <StayCard card={card2} />
                <StayCard card={card3} />
            </div>
        </div>
    );
}

export default App;
