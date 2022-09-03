import { Wrapper } from "./App.styles";
import MainSection from "../components/MainSection/MainSection";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

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
