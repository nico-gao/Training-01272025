import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CounterProvider, { CounterContext } from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  // <CounterContext.Provider value={{ count: 10 }}>
  //   <App />
  // </CounterContext.Provider>
  <CounterProvider>
    <App />
  </CounterProvider>
);
