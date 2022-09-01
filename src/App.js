import styled from "styled-components";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <MainSection />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  allign-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  position: relative;
  font-family: "Poppins", sans-serif;
`;
