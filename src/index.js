import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { useState, createContext } from "react";

export const themeContext = createContext();
export const deleteToDoContext = createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));

const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState("light");
  console.log("ThemeContext used!");
  return (
    <themeContext.Provider value={[Theme, setTheme]}>
      {children}
    </themeContext.Provider>
  );
};

const DeleteProvider = ({ children }) => {
  const [deleteFlag, setdeleteFlag] = useState(0);
  console.log("deleteContext used!");

  return (
    <deleteToDoContext.Provider value={[deleteFlag, setdeleteFlag]}>
      {children}
    </deleteToDoContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <DeleteProvider>
        <App />
      </DeleteProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
