import React, {useState,useEffect} from 'react';
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate,useParams } from "react-router-dom";


export default function EditarEmpresa(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [nome,setNome] = useState("");
    const [responsavel,setResponsavel] = useState("");
    const [contato,setContato] = useState("");
    const [msg,setMsg]=useState([]);
    const [dados,setDados]=useState([]);
    

   // function validaremail(){
      //  var re = /\S+@\S+\.\S+/;
     //   return re.test(email);

  //  }

    useEffect(()=>{
        mostrardados();
        alert("boa noite")
    },[])
    function mostrardados(){
        let lista = JSON.parse(localStorage.getItem("cad-empresas")||"[]");
        setDados(lista)
        let usu = lista.filter(item=>item.id==id);
        setNome(usu[0].nome);
        setResponsavel(usu[0].responsavel);
        setContato(usu[0].contato);
        
        
    }

    function salvardados(e){
        e.preventDefault();
        let i=0;
        let errorMsg=[];
        
        if(nome.length<3){
            errorMsg.push("campo nome tem menos de 3 caracteres\n");
            i++;
        }

        if(i==0)
        {
            
            setMsg("");
            let dadosnovos=[];
            let lista = JSON.parse(localStorage.getItem("cad-empresas")||"[]");
            dadosnovos=lista.map((function(item){
                if(item.id==id){
                    return{id:id,
                        nome:nome,
                        responsavel:responsavel,
                        contato:contato,
                    }
                }else{
                    return{
                        id:item.id,
                        nome:item.nome,
                        responsavel:item.responsavel,
                        contato:item.contato
                    }
                }
            }));
            localStorage.setItem("cad-empresas", JSON.stringify(dadosnovos));
            alert("Dados Salvos com Sucesso!");
            navigate("/listaempresas");
        }else{
                setMsg(errorMsg);
        }
    }



 return(
    <div className="dashboard-container">
    <Menu/>
    <div className="principal">
        <Head title="Editar Empresa"/>
        <section className="form-empresa">
            <form onSubmit={salvardados}>
                <label>
                    Nome
                </label>
                <input placeholder="Nome"
                value={nome}
                onChange={e=> setNome(e.target.value)}
                />

                <label>
                    Responsavel
                </label>
                <input placeholder="Responsavel"
                type="text"
                value={responsavel}
                onChange={e=> setResponsavel(e.target.value)}
                />

                <label>
                    Contato
                </label>
                <input type="text"
                value={contato}
                onChange={e=> setContato(e.target.value)}
                />

                <button className="button_save" type="submit">
                    Salvar
                </button>
                <pre>{msg}</pre>

            </form>
        </section>
    </div>
</div>
 )   
}
