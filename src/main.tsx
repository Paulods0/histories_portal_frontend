import React from "react"

import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./config/react-query.ts"
import CartContextProvider from "./context/cart-context.tsx"
import ThemeContextProvider from "./context/theme-context.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <CartContextProvider>
          <App />
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            position="bottom-right"
          />
        </CartContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
