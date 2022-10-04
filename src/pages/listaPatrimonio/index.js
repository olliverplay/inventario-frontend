
import React,{useState,useEffect} from "react"
import { confirmAlert } from "react-confirm-alert";
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { FiEdit,FiDelete,FiFilePlus, FiTrash} from "react-icons/fi";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate,Link} from "react-router-dom";

export default function Listapatrimonio(){
    const navigate=useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    useEffect(()=>{
        mostrardados();
    },[])
    function editar(id){
        navigate(`/editarpatrimonio/${id}`)
      
    }

    function excluir(id){
        confirmAlert({
            title: 'Excluir Cadastro',
            message: 'Deseja realmente excluir',
            buttons:[
                {
                    label: 'Sim',
                    onClick:() => {
                        let dadosnovos = [];
                        dadosnovos=dados.filter(item=>item.id!=id);
                        setDados(dadosnovos);
                        localStorage.setItem('cad-patrimonio', JSON.stringify(dadosnovos));
                    }
                },
                {
                    label:'Não',
                    onClick:() => alert('click No')
                }
            ]
        });
    };

    function mostrardados(){
        let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
        setDados(lista);
        setRow(lista.length)
    }

 return(
<div className="dashboard-container">
    <Menu/>
    <div className="principal">
    <Head title="Lista de Patrimonio"/>
    <div className="button_new">
        <a href="/patrimonio">
            <FiFilePlus
                size={24}
                color="green"
                cursor="pointer"
            />
        </a>        
    </div>
        <table>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Data_aquisiçao</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            {
                dados.map((usu)=>{
                    return(
                        <tr key={usu.toString()}>
                            <td>{usu.id}</td>
                            <td>{usu.nome}</td>
                            <td>{usu.data_aquisicao}</td>
                            
                            <td>
                                <FiEdit
                                    color="blue"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>editar(usu.id)}
                                />
                            </td>
                            <td>
                                <FiTrash
                                    color="red"
                                    size={18}
                                    cursor="pointer"
                                    onClick={(e)=>excluir(usu.id)}
                                />
                            </td>
                        </tr>
                    )
                })
            }
            <tr>
                <td colSpan={3} style={{textAlign:"right", fontWeight:"bold"}}>
                    Total
                </td>
                <td colSpan={2} style={{fontWeight:"bold"}}>
                    {row}
                </td>
            </tr>
        </table>
    </div>
</div>

 )   
}