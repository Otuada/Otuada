import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contato from "../Pages/Contato";
import Curriculum from "../Pages/Curriculum";
import Portifolio from "../Pages/Portifolio";
import Voltar from "../Pages/Voltar";

 const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
              <Route index element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contato" element={<Contato />}/>
              <Route path="/curriculum" element={<Curriculum />}/>
              <Route path="/portifolio" element={<Portifolio />}/>
              <Route path="-1" element={<Voltar />}/>
            </Routes>     
        </BrowserRouter>

    )
}

export default Router;