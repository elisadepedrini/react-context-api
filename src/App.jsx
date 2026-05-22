import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import WhoPage from "./pages/WhoPage"
import ProductsPage from "./pages/ProductsPage"
import DefaultLayout from "./layouts/DefaultLayout"
import SingleProductPage from "./pages/SingleProductPage"
import NotFound from "./pages/NotFound"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/who" element={<WhoPage />}/>
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/products/:id" element={<SingleProductPage />}/>
            <Route path="/not_found" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
