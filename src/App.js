import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeeklyBasket from "./components/WeeklyBasket";
import "./App.scss";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
    document.documentElement.lang = i18n.language;

    document.title = i18n.t("document_title");
  }, [i18n, i18n.language]);

  return (
    <>
      <Navbar onLanguageChange={(lang) => i18n.changeLanguage(lang)} />

      <main role="main" className="pt-5 px-3">
        <Header />
        <WeeklyBasket />
      </main>

      <Footer />
    </>
  );
}

export default App;
