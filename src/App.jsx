import "./App.css";
import React from "react";
import Component from "./Components/Basicos/Component"
import ComParametro from "./Components/Basicos/ComParametro";
import Aleatorio from "./Components/Basicos/Aleatorio";
import Card from "./Components/Layout/Card";
import Familia from "./Components/Basicos/Familia";

export default () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Componente" color="#080">
                <Component></Component>
            </Card>

            <Card titulo="Componente com parametro">
                <ComParametro name="Victor" age="22"></ComParametro>
            </Card>

            <Card titulo="Numero aleatorio">
                <Aleatorio min={2} max={6}></Aleatorio>
            </Card>

            <Card titulo="Componente com filhos" color="#00C8F8">
                <Familia></Familia>
            </Card>

        </div> 

    </div>
);
