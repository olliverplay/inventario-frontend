import React from "react"
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
export default function Dashboard(){
 return(
<div className="dashboard-container">
    <Menu/>
    <div className="principal">
    <Head title="Olá Mundo"/>
    <h1>Estou no Dashboard</h1>
    </div>
</div>

 )   
}