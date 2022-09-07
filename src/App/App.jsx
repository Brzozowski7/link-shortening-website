import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { Wrapper } from "./App.styles";
import { loadMessages } from "./App.utils";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  const [language, setLanguage] = useState("");
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    loadMessages(language).then(setMessages);
  }, [language]);
  return (
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
      <Wrapper>
        <Navbar setLanguage={setLanguage} />
        <MainSection />
        <Footer />
      </Wrapper>
    </IntlProvider>
  );
}

export default App;
