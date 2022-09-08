import { useState } from "react";
import { IntlProvider } from "react-intl";
import { Wrapper } from "./App.styles";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { messages } from "./App.const";

function App() {
  const [language, setLanguage] = useState("");

  return (
    <IntlProvider
      messages={messages[language]}
      locale={language}
      defaultLocale="en"
    >
      <Wrapper>
        <Navbar setLanguage={setLanguage} />
        <MainSection />
        <Footer />
      </Wrapper>
    </IntlProvider>
  );
}

export default App;
