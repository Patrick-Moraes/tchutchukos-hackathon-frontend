import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <img src={""} alt="" />
            <div>
                <Link to="/">Python</Link>
                <Link to="/">JavaScript</Link>
                <Link to="/">PHP</Link>
            </div>
        </header>
    )
}
