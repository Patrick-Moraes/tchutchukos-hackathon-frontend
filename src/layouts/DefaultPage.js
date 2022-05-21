import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer.js"

import Header from "./../components/Header.js"

export default function DefaultPage() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
