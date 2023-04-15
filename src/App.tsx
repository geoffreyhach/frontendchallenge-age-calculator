import styled from "styled-components";

import Card from "./components/Card";
import GlobalStyle from "./style/Globalstyle";

function App() {
  return (
    <Background>
      <GlobalStyle />
      <Card />
      <Footer>
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io/home">Front-end Mentor</Link>.
        Coded by <Link href="http://geoffreyhach.fr">Geoffrey Hach</Link>.
      </Footer>
    </Background>
  );
}

export default App;

const Background = styled.main`
  // position: relative
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0.5rem;
  background-color: lightblue;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Poppins Regular";
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
`;

const Link = styled.a`
  font-family: "Poppins Regular";
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  color: hsl(259, 100%, 65%);
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
