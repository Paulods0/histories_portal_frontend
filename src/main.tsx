import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CartContextProvider } from "./context/cart-context.tsx"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./config/react-query.ts"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <App />
          <ToastContainer />
        </CartContextProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
)
