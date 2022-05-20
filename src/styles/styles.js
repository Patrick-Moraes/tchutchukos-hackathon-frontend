import styled from "styled-components"

export const AppContainer = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px);

    margin: 0 auto;

    @media (min-width: 700px) {
        width: 700px;
        margin: 0 auto;
    }
`

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    position: fixed;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fc7753;
    color: #403d58;
    align-items: center;
    .options {
        padding: 20px;
    }
    img {
    }
    button {
        width: 150px;
        height: 50px;
        border: none;
        margin: 10px;
        border-radius: 5px;
        box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
        border: 1px solid black;
        /* background-color: ${(props) => {
            console.log(props)
        }}; */
    }
    .firstButton {
        background-color: #403d58;
        color: #ffff;
    }
    .secondtButton {
        color: #ffff;
        background-color: #66d7d1;
    }
    .thirdButton {
        color: #ffff;
        background-color: #dbd56e;
    }
`
