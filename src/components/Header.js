import React from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import * as S from "./../styles/styles.js"

import logo from "./../assets/favicon.png"

export default function Header() {
    const navegation = useNavigate()
    return (
        <S.Header>
            <div className="logoNtitle">
                <img
                    src={logo}
                    alt="logo"
                    onClick={() => {
                        navegation("/")
                    }}
                />
                <h1 className="title">Curso dos Tchuchukos</h1>
            </div>
            <img src={logo} alt="" />
            <div className="options">
                <button
                    className="firstButton"
                    onClick={() => {
                        navegation("/collection/Python")
                    }}
                >
                    Python
                </button>
                <button
                    className="secondtButton"
                    onClick={() => {
                        navegation("/collection/JavaScript")
                    }}
                >
                    JavaScript
                </button>
                <button
                    className="thirdButton"
                    onClick={() => {
                        navegation("/collection/PHP")
                    }}
                >
                    PHP
                </button>
            </div>
        </S.Header>
    )
}
