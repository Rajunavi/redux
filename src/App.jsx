import "./App.css";
import Product from "./Components/Product";
import { Route, Routes, Outlet } from "react-router-dom";
import ProductDesc from "./Components/ProductDesc";

function App() {
  // const route = createBrowserRouter()
  return (
    <>
      <Outlet />
      <Routes>

        <Route path="/" element={<Product />} />
        <Route path="/productDesc" element={<ProductDesc />} />
        
      </Routes>
    </>
  );
}

export default App;
