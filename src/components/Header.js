import React from "react"
import { Link } from "react-router-dom"
import * as S from "./../styles/styles.js"

export default function Header() {
    return (
        <S.Header>
            <img src={""} alt="" />
            <div className="Options">
                <Link to="/">Python</Link>
                <Link to="/">JavaScript</Link>
                <Link to="/">PHP</Link>
            </div>
        </S.Header>
    )
}
