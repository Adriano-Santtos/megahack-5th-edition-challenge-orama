import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi';
import './style.css'


export default function Singin(){
    return(
        <div className="singin">
            <div className="singin-card">
                <div className="singin-container">
                    <div className="singin-logo">
                        <span>
                            Agora vamos saber <br />o seu perfil de investidor
                        </span>
                    </div>
                    <div className="singin-content">
                        <div className="singin-logo-1">
                            <img src="./images/man_with_ipad.svg" alt="manipad"/>
                        </div>
                        <div className="enter">
                            <Link to="/register" className="singin-enter">
                                <FiArrowRight size={26} color="#ffffff" />
                            </Link>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </div>
    );
}