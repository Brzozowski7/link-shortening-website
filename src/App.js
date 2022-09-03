import styled from "styled-components";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
`;
