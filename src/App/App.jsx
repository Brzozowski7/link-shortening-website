import { Wrapper } from "./App.styles";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
