import React from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Cadastrosetor from "./pages/cadastroSetor";
import Cadastroempresa from "./pages/cadastroEmpresa";
import EditarEmpresa from "./pages/editarEmpresa";
import Editarusuario from "./pages/editarUsuario";
import Editarlotacao from "./pages/editarLotação";
import ListaUsuarios from "./pages/listaUsuarios";
import ListaEmpresas from "./pages/listaEmpresa";
import Patrimonio from "./pages/patrimonio";
import Listapatrimonio from "./pages/listaPatrimonio";
import Editarpatrimonio from "./pages/editarPatrimonio";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";
import Editarsetor from "./pages/editarSetor";
import Listasetor from "./pages/listaSetor";
import Cadastrolotacao from "./pages/cadastroLotação";
import Listalotacao from "./pages/listaLotação";


export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Logon/>} />
          <Route path="/listausuarios" element={<ListaUsuarios/>} />
          <Route path="/listaempresas" element={<ListaEmpresas/>} />
          <Route path="/listalotacao" element={<Listalotacao/>} />
          <Route path="/cadastrousuario" element={<Cadastrousuario/>} />
          <Route path="/cadastroempresa" element={<Cadastroempresa/>} />
          <Route path="/cadastrosetor" element={<Cadastrosetor/>} />
          <Route path="/cadastrolotacao" element={<Cadastrolotacao/>} />
          <Route path="/editarusuario/:id" element={<Editarusuario/>} />
          <Route path="/editarempresa/:id" element={<EditarEmpresa/>} />
          <Route path="/editarsetor/:id" element={<Editarsetor/>} />
          <Route path="/editarlotacao/:id" element={<Editarlotacao/>} />
          <Route path="/listapatrimonio" element={<Listapatrimonio/>} />
          <Route path="/listasetor" element={<Listasetor/>} />
          <Route path="/editarpatrimonio/:id" element={<Editarpatrimonio/>} />
          <Route path="/patrimonio" element={<Patrimonio/>} />

          <Route path="/dashboard" element={<Dashboard/>} />
          
        </Routes>
</BrowserRouter>
    )
}