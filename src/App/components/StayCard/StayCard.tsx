import React from "react";
import { Card } from "../../types";
import "./StayCard.scss";
import { MdStar } from "react-icons/md";
type Props = {
    card: Card;
};

const StayCard = ({ card }: Props) => {
    return (
        <div className="card">
            <img src={card.photo} alt={card.title} />
            <div
                className="card-info"
                style={{ marginTop: !card.superHost ? 4 : 0 }}
            >
                {card.superHost && <p className="super">Super Host</p>}
                <p className={card.superHost ? "card-type" : "no-super"}>
                    {`${card.type}${card.beds ? ` - ${card.beds} beds` : ""}`}
                </p>
                <p className="rating">
                    <MdStar color="#EB5757" size={20} />
                    {card.rating}
                </p>
            </div>
            <p className="card-title">{card.title}</p>
        </div>
    );
};

export default StayCard;
