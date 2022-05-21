import styled from "styled-components"
import Footer from "../components/Footer.js"

export const AppContainer = styled.main`
    top: 120px;
    width: 100vw;

    min-height: calc(100vh - 100px);

    margin: 100px auto;
    .title {
        color: #66d7d1;
        padding: 50px;
        font-size: 50px;
        font-weight: 700;
    }
`

export const Header = styled.header`
    &:hover {
        cursor: pointer;
    }
    width: 100%;
    z-index: 10;
    height: 100px;
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    position: fixed;
    top: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fc7753;
    color: #403d58;
    align-items: center;
    .logoNtitle {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .title {
        font-size: 35px;
        font-weight: 700;
    }
    .options {
        padding: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    img {
    }
    button {
        &:hover {
            cursor: pointer;
        }
        font-family: "Inter", sans-serif;
        width: 150px;
        height: 50px;
        border: none;
        margin: 10px;
        border-radius: 5px;
        box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
        border: 1px solid white;
        /* background-color: ${(props) => {
            //console.log(props)
        }}; */
        color: #ffff;
    }
    .firstButton {
        background-color: #403d58;
    }
    .secondtButton {
        background-color: #66d7d1;
    }
    .thirdButton {
        background-color: #dbd56e;
    }
`

export const VideoCollection = styled.section`
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    box-sizing: border-box;
    width: 280px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 20px;
    background-color: #d6f8f9;
    opacity: 0.8;
    img {
        padding: 3px 0 0 0;
        z-index: 1;
        position: absolute;
        top: 0;
        width: 260px;
        height: 260px;
    }
    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: 261px;
        padding: 10px;
        h1 {
            font-weight: 700;
            padding-bottom: 15px;
            font-family: "Inter", sans-serif;
        }
        p {
            font-weight: 400;
            color: #403d58;
            font-family: "Inter", sans-serif;
        }
    }
`
export const VideoCollectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
`
export const ColletionContainer = styled.div`
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    box-sizing: border-box;

    position: relative;

    width: 400px;
    height: 380px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 20px;
    background-color: #f2efea;
    opacity: 0.8;
    img {
        padding: 3px 0 0 0;
        z-index: 1;
        position: absolute;
        top: 0;
        width: 400px;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        height: auto;
    }
    .description {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: 261px;
        padding: 10px;
        flex-direction: columns;
        align-items: center;
        h1 {
            font-weight: 700;
            padding-bottom: 15px;
            font-family: "Inter", sans-serif;
            color: #403d58;
            text-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
        }
        p {
            font-weight: 400;
            color: #403d58;
            font-family: "Inter", sans-serif;
            text-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
        }
        .time {
            position: absolute;
            z-index: 5;
            bottom: 0px;
            right: 10px;
        }
    }
`

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 200px;
    background: #403d58;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 10px 10px 10px 10px rgba(1, 1, 1, 0.2),
        2px 6px 20px 2px rgba(1, 1, 1, 0.19);
    .collaborator {
        img {
            width: 100px;
            border-radius: 50%;
        }
    }
`
