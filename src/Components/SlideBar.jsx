import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/SliderBar.scss";
import { FaBars } from "react-icons/fa";

const SlideBar = () => {
    const [isExpanded, setIsExpanded] = useState(true); // Estado para controlar a visibilidade

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded); // Alterna o estado
    };

    return (
        <>
            <div className={`slidebar ${isExpanded ? "expanded" : "collapsed"}`}>
                <button onClick={toggleSidebar}>
                    <FaBars color="white" size={25} />
                </button>

                {isExpanded && ( // Exibe o menu apenas se expandido
                    <ul>
                        <li>
                            <Link to="/inicio">Início</Link>
                        </li>
                        <li>
                            <Link to="/Consultas">Consultas</Link>
                        </li>
                        <li>
                            <Link to="/database">Banco de dados</Link>
                        </li>
                    </ul>
                )}
                
            </div>
            
        </>
    );
};

export default SlideBar;
