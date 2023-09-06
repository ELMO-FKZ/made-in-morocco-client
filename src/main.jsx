import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContextProvider } from "./contexts/ToastContext"
import { ShoppingContextProvider } from "./contexts/ShoppingContext"
import { ModalContextProvider } from "./contexts/ModalContext"
import App from "./App.jsx"
import "./normalize.css"
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
      <ToastContextProvider>
        <ShoppingContextProvider>
          <App />
        </ShoppingContextProvider>
      </ToastContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
)
