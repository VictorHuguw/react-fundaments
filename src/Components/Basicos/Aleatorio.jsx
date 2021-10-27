import React from "react";

export default function Aleatorio(props){

    console.log(props)
    
    let min = Math.ceil(props.min);
    let max = Math.floor(props.max);
    
    let aleatorio = Math.floor(Math.random() * (max - min)) + min;

    return(
     <div>
        <h3>Min : {props.min} </h3>   
        <h3>Max : {props.max} </h3>   
        <h3>Numero sorteado : {aleatorio} </h3>   
     </div>
     
    )

}