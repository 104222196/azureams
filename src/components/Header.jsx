import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHome, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const nav = useRef();
    const btn = useRef();
    const location = useLocation();

    function toggleHeadnav() {
        if (nav && btn) {
            nav.current.classList.toggle("clickable");
            nav.current.children[0].classList.toggle("show");
            btn.current.classList.toggle("rotate");
        }
    }

    return (
        <header className="headnav">
            <Link to="/home">
                <img alt="azure-logo" src="./assets/logo.png"/>                
            </Link>
            <nav className="large-screen-nav">
                <ul>
                    <HorizontalMenuItem to="home" text="Trang chủ" isSelected={location.pathname === "/home"}/>
                    <HorizontalMenuItem to="news" text="News & Blogs" isSelected={location.pathname === "/news"}/>
                    <HorizontalMenuItem to="about" text="Về CLB" isSelected={location.pathname === "/about"}/>
                </ul>
            </nav>
            
            <button onClick={toggleHeadnav} ref={btn}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <nav className="small-screen-nav" ref={nav}>
                <ul>
                    <VerticalMenuItem to="home" icon={faHome} text="Trang chủ" isSelected={location.pathname === "/home"}/>
                    <VerticalMenuItem to="news" icon={faNewspaper} text="News & Blogs" isSelected={location.pathname === "/news"}/>
                    <VerticalMenuItem to="about" icon={faUser} text="Về CLB" isSelected={location.pathname === "/about"}/>
                </ul>
            </nav>
        </header>
    );
}

function HorizontalMenuItem(props) {
    return (
        <li>
            <div className={`bottom-left-corner ${props.isSelected && "selected"}`}></div>
            <div className={`top-right-corner ${props.isSelected && "selected"}`}></div>
            <Link to={`/${props.to}`}>{props.text}</Link>
        </li>
    );
}

function VerticalMenuItem(props) {
    return (
        <li>
            <Link to={`/${props.to}`} className={props.isSelected ? "selected" : ""}>
                <FontAwesomeIcon icon={props.icon}/>{props.text}
            </Link>
        </li>
    );
}

export default Header;