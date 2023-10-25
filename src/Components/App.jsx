import { createGlobalStyle } from "styled-components";
import User from "./CompleteUser";

function App() {
  return (
    <>
      <User />
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        max-width: 1140px;
        margin: auto;
        font-size: 15px;
        font-family: 'League Spartan', sans-serif;
    }
    .mobile-header ,
    .desktop-header{
      height: 50px;
      background-color: hsl(180, 14%, 20%);
    }
    .mobile-header{
      display: none;
    }
    .p-wrapper{
      justify-content: space-between;
      width: 60%;
    }
    span{
      color: hsl(180, 8%, 52%);
    }
    @media (max-width: 768px){
      .desktop-header{
        display: none;
      }
      .mobile-header{
        display: block;
      }
    }
    
`;

export default App;
