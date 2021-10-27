import React from "react";
import "./Card.css";

export default props => {

    const style = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card" style = {style}>
            <div className="titulo">
                {props.titulo}
            </div>
            <div className="conteudo">
                {props.children}
            </div>
        </div>
    )
}