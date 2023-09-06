import React from "react"
import ReactDOM from "react-dom/client"
import { ModalContextProvider } from "./contexts/ModalContext"
import App from "./App.jsx"
import "./normalize.css"
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
    <App />
    </ModalContextProvider>
  </React.StrictMode>
)
