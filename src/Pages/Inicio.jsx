import React from "react";
import "../Styles/Inicio.scss";
import BancoDeDados from "../Components/BancoDeDados";

const Inicio = () => {
    return (
        <div className="container-home">
            <div className="container-interno">
                <div className="textos">
                    <h1>SQL Generator</h1>
                    <p>
                        SQL Generator é uma aplicação que ajuda a montar SQLs para
                        executar nos clientes. Traz algumas consultas prontas e alguns
                        recursos experimentais
                    </p>
                </div>

                <div className="informacoes">
                    <div className="consultas">
                        Consultas Salvas
                    </div>
                    <div className="consultas">
                        Consultas prontas
                    </div>
                </div>
                <div className="informacoes">
                    <div className="consultas">
                        Criar consultas
                    </div>
                    <div className="consultas">
                        teste
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
