import styled from "styled-components"

export const AppContainer = styled.main`
    width: 100%;
    min-height: 100vh;

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
    button {
        width: 80px;
        height: 40px;
        border: none;
    }
`
