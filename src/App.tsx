import styled from "styled-components";

import Card from "./components/Card";
import GlobalStyle from "./style/Globalstyle";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0.5rem;
  background-color: lightblue;
`;

function App() {
  return (
    <Background>
      <GlobalStyle />
      <Card />
    </Background>
  );
}

export default App;
