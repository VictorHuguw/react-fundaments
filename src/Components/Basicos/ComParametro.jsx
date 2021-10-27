import React from "react";

export default function ComParametro(props){

    console.log(props)

    return(
        <h3>Olá {props.name} {props.age}</h3>
    )

}