import {BrowserRouter, Routes, Route} from "react-router-dom";

export default const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
              <Route index element={Home}/>
              <Route path="/about" element={About}/>
              <Route path="/contato" element={Contato}/>
              <Route path="/curriculum" element={Curriculum}/>
              <Route path="/portifolio" element={Portifolio}/>
              <Route path="-1" element={Voltar}/>
            </Routes>     
        </BrowserRouter>

    )
}