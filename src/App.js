import styled from "styled-components"
import Navbar from "./components/Navbar";

function App() {
  return (
    <Wrapper>
      <Navbar/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
display:flex;
flex-direction:row;
width:100vw;
height:100vh;
padding:1rem 2rem;
position:relative;
`