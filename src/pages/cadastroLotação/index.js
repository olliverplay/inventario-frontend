import React, {useState,useEffect} from 'react';
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate } from "react-router-dom";


export default function Cadastrolotacao(){
    const navigate = useNavigate();
    const [datalotacao,setDatalotacao] = useState();
    const [idusu,setIdusu] = useState("");
    const [idemp,setEmp] = useState("");
    const [idset,setSet] = useState("");
    const [idpat,setpat] = useState("");
    const [msg,setMsg]=useState([]);
    const [dados,setDados]=useState([]);
    const [usuarios,setUsuarios]=useState([]);
    const [empresa,setEmpresa]=useState([]);
    const [setor,setSetor]=useState([]);
    const [patrimonio,setPatrimonio]=useState([]);
    

    //function validaremail(){
       // var re = /\S+@\S+\.\S+/;
      //  return re.test(email);

   // }

    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
        let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
        setUsuarios(JSON.parse(localStorage.getItem("cad-usuarios")||"[]"));
        setEmpresa(JSON.parse(localStorage.getItem("cad-empresa")||"[]"));
        setPatrimonio(JSON.parse(localStorage.getItem("cad-patrimonio")||"[]"));
        setSetor(JSON.parse(localStorage.getItem("cad-setor")||"[]"));
        setDados(lista)
    }

    //function verificarduplicidade(email){
       // let dadosnovos = [];
       // dadosnovos = dados.filter(item=>item.email==email);
      //  if(dadosnovos.length>0){
      //      return true
      //  }
      //  return false;
   // }

    function salvardados(e){
        e.preventDefault();
     
        if(idemp.length!==0 && idpat.length!==0 && idset.length!==0 && idusu.length!==0)
        {

             setMsg("");
               let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
                lista.push(
                    {
                        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                        idusu:idusu,
                        idset:idset,
                        idpat:idpat,
                        idemp:idemp,
                        datalotacao:datalotacao,
                        
                    }
                )
                localStorage.setItem("cad-lotacao", JSON.stringify(lista));
                alert("Dados Salvos com Sucesso!");
                navigate("/listalotacao");
        }else{
            setMsg("Verifique todos os campos!");
        }
    }

    return(
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                    <Head title="Cadastro de Lotação" />
                    <section className="form-cadastro">
                        <form onSubmit={salvardados} >
                            <label>Usuário</label>
                            <select
                            onChange={(e) => setIdusu(e.target.value)}
                            >
                                <option value=""></option>
                            {
                            usuarios.map((usu)=>{
                                  return(
                                    <option value={usu.id}> {usu.nome} </option>
                                  )
                                  })
                            }
                            </select>
        
                            <label>Empresa</label>
                            <select
                            onChange={(e) => setEmp(e.target.value)}
                            >
                                <option value=""></option>
                            {
                            empresa.map((emp)=>{
                                  return(
                                    <option value={emp.id}> {emp.nome} </option>
                                  )
                                  })
                            }
                            </select> 
                            <label>Setor</label>
                            <select
                            onChange={(e) => setSet(e.target.value)}
                            >
                                <option value=""></option>
                            {
                            setor.map((set)=>{
                                  return(
                                    <option value={set.id}> {set.nome} </option>
                                  )
                                  })
                            }
                            </select>   



                            <label>Patrimônio</label>
                            <select
                            onChange={(e) => setpat(e.target.value)}
                            >
                            <option value=""></option>
                            {
                            patrimonio.map((pat)=>{
                                  return(
                                    <option value={pat.id}> {pat.nome} </option>
                                  )
                                  })
                            }
                            </select>   




                            <input 
                                    type="Date"
                                    value={datalotacao}
                                    onChange={(e) => setDatalotacao(e.target.value)}
                            />                 
                            <button className="button_save"  type="submit">
                                Salvar
                            </button>
                            <pre>{msg[0]}</pre>
                            <pre>{idusu}</pre>
        
                        </form>
                    </section>
            </div>
        </div>
 )   
}
