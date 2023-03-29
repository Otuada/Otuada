
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contato from "../Pages/Contato";
import Curriculum from "../Pages/Curriculum";
import Portifolio from "../Pages/Portifolio";




 function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/portifolio" element={<Portifolio />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Router;