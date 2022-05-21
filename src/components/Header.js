import React from "react"
import { useNavigate } from "react-router-dom"
import * as S from "./../styles/styles.js"

import logo from "./../assets/favicon.png"

export default function Header() {
    const navegation = useNavigate()
    return (
        <S.Header>
            <img
                src={logo}
                alt="logo"
                onClick={() => {
                    navegation("/")
                }}
            />
            <div className="options">
                <button
                    className="firstButton"
                    onClick={() => {
                        navegation("/")
                    }}
                >
                    Python
                </button>
                <button
                    className="secondtButton"
                    onClick={() => {
                        navegation("/")
                    }}
                >
                    JavaScript
                </button>
                <button
                    className="thirdButton"
                    onClick={() => {
                        navegation("/")
                    }}
                >
                    PHP
                </button>
            </div>
        </S.Header>
    )
}
