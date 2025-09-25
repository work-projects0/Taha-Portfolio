import { createContext, useState, useContext } from "react";
import content from "../assets/data/content.json";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // الافتراضي إنجليزي
  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggleLang, content }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
