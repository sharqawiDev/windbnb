import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./Header.scss";
import { MdSearch } from "react-icons/md";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="app-header">
            <img src={logo} className="header-logo" alt="logo" />
            <div className="search-box">
                <p>Helsinki, Finland</p>
                <p style={{ color: 1 < 2 ? "#BDBDBD" : "black" }}>Add Guests</p>
                <span onClick={() => alert("search")}>
                    <MdSearch size={24} />
                </span>
            </div>
        </header>
    );
};

export default Header;
