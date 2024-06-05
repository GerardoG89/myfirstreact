import React,{useState,useEffect} from "react";

const Usuarios = () => {

const[usuarios, setUsuarios] = useState ([]);

    useEffect(()=>{

        const traerUsuarios = async ()=>{
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!respuesta.ok){
                console.log("Ocurrio un error")
            } else{
                const data = await respuesta.json();
                setUsuarios(data);
                console.log(data)
            }

            
        };
        traerUsuarios();
    },[]);

    return(
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map(usuarios=>(
                    <li key = {usuarios.id}>
                        {usuarios.name} {usuarios.phone}
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default Usuarios