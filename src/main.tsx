import React from "react"

import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./config/react-query.ts"
import CartContextProvider from "./context/cart-context.tsx"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <App />
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            position="bottom-right"
          />
        </CartContextProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
)
