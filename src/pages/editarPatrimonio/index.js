import React, {useState,useEffect} from 'react';
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate,useParams } from "react-router-dom";


export default function Editarpatrimonio(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [nome,setNome] = useState("");
    const [data_aquisicao,setData_aquisicao] = useState("");
    const [msg,setMsg]=useState([]);
    const [dados,setDados]=useState([]);
    

   // function validaremail(){
      //  var re = /\S+@\S+\.\S+/;
     //   return re.test(email);

  //  }

    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
        let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
        setDados(lista)
        let usu = lista.filter(item=>item.id==id);
        setNome(usu[0].nome);
        setData_aquisicao(usu[0].data_aquisicao);
      
        
        
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
            let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
            dadosnovos=lista.map((function(item){
                if(item.id==id){
                    return{id:id,
                        nome:nome,
                        data_aquisicao:data_aquisicao,
                      
                    }
                }else{
                    return{
                        id:item.id,
                        nome:item.nome,
                        data_aquisicao:item.data_aquisicao,
                       
                    }
                }
            }));
            localStorage.setItem("cad-patrimonio", JSON.stringify(dadosnovos));
            alert("Dados Salvos com Sucesso!");
            navigate("/listapatrimonio");
        }else{
                setMsg(errorMsg);
        }
    }

 return(
    <div className="dashboard-container">
    <Menu/>
    <div className="principal">
        <Head title="Editar Patrimonio"/>
        <section className="form-cadastro">
            <form onSubmit={salvardados}>
                <label>
                    Nome
                </label>
                <input placeholder="Nome"
                value={nome}
                onChange={e=> setNome(e.target.value)}
                />

                <label>
                    Data_aquisiçao
                </label>
                <input placeholder="Data_aquisição"
                type="date"
                value={data_aquisicao}
                onChange={e=> setData_aquisicao(e.target.value)}
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
