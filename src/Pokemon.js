import React,{useState,useEffect} from "react";
import { Grid, Card, CardContent, Typography, circularProgressClasses, Container, CardActionArea} from "@mui/material";

const Pokemon =() =>{

    const [pokemones, setPokemones] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState (null); //aqui es null porque vamos a manehar el error y el erros es un objeto 
    const [PokemonSeleccionado, setPokemonSelecciondo] =useState (null)

useEffect(()=>{

    const traerPokemones = async ()=> {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if(!respuesta.ok){
            console.log("Ocurrio un error")
        } else{
            const data = await respuesta.json();
            setPokemones(data.results);
            console.log(data.results)
        }

        
    };

    traerPokemones();



    
},[]);

const fetchPokemondetail = async (id)=> {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if(!respuesta.ok){
        console.log("Ocurrio un error")
    } else{
        const data = await respuesta.json();
        setPokemonSelecciondo (data);
        console.log(data)
        
    }
    
    
};

return(
    <div>
        <h1>Lista de pokemones</h1>
        <ul>
            {pokemones.map((pokemon,index)=>(
                <li key = {index}>
                    {pokemon.name} 
                    <button variant="contained" onClick= {()=>fetchPokemondetail(index+1)}> Selecionar Pokemon</button>
                </li>
            ))}
        </ul>
        <hr/>
        <Typography variant h="5"> 
        <h1> Detalle Pokemon</h1>
        </Typography>
        {/*ELEMENTO APARECE SOLAMENTE CUANDO pokemon seleccionado es diferente a null */}
        <Container>
        {PokemonSeleccionado &&
            <div>
         
            <Card>
                <CardContent>
                <Typography variant = "h2" component={"div"}>Name:{PokemonSeleccionado.name}</Typography>
                <p>Nombre: {PokemonSeleccionado.name}</p>
                <img src={PokemonSeleccionado.sprites.front_default}/>
                <p> Altura:{PokemonSeleccionado.heigth} </p>
                <p>Peso:{PokemonSeleccionado.weight}</p>
                </CardContent>
            </Card>
            </div>

         }
        </Container>
       

    </div>
   
      
)


};

export default Pokemon
