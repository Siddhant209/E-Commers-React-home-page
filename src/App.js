import"bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import "../src/App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Listing from "./pages/listing-products/Listing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="/listing" element={<Listing/>} />
      </Routes>
    <Footer />
      </BrowserRouter>
    </div>  
  );
}
export default App;
