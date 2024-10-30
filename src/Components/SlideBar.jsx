import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SliderBar.css";
import { FaBars } from "react-icons/fa";

const SlideBar = () => {
    return <>
        <div className="slidebar">
            <button><FaBars color="white" size={25} /></button>

            <ul>
                <li>
                    <Link to="/inicio">Início</Link>
                </li>
                <li>
                    <Link to="/Consultas">Consultas</Link>
                </li>
            </ul>

        </div>
    </>
}

export default SlideBar;