import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #F2EFEA;

  &::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.scrollbarColor};
  }
}

input, textarea {
  &:focus {
          outline: none;
      }
}

button {
  cursor:  pointer;
}

Link, a {
  color: inherit;
  text-decoration: none;
}
`

export default GlobalStyle
