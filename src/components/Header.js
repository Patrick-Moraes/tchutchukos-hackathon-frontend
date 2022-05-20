import React from "react"
import { Link } from "react-router-dom"
import * as s from "./../styles/styles.js"

export default function Header() {
    return (
        <s.Header>
            <img src={""} alt="" />
            <div className="Options">
                <button to="/">Python</button>
                <button to="/">JavaScript</button>
                <button to="/">PHP</button>
            </div>
        </s.Header>
    )
}
