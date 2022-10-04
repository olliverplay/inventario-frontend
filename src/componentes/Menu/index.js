import {FiUser, FiTruck, FiHome, FiClipboard} from "react-icons/fi"
export default function Menu(){

    return(
        <div className="menu">
            <p>Menu</p>
            <a href="/listausuarios"><FiUser/>Usuários</a>
            <a href="/listaempresas"><FiTruck/>Empresas</a>
            <a href="/listapatrimonio"><FiHome/>Patrimonio</a>
            <a href="/listasetor"><FiClipboard/>Setor</a>
            <a href="/listalotacao"><FiClipboard/>Lista Lotação</a>
           

        </div>
    )
}