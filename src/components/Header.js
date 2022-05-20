import React from "react"
import { Link } from "react-router-dom"
import * as s from "./../styles/styles.js"

import logo from "./../assets/favicon.png"

export default function Header() {
    return (
        <s.Header>
            <img src={logo} alt="" />
            <div className="options">
                <button className="firstButton" to="/">
                    Python
                </button>
                <button className="secondtButton" to="/">
                    JavaScript
                </button>
                <button className="thirdButton" to="/">
                    PHP
                </button>
            </div>
        </s.Header>
    )
}
