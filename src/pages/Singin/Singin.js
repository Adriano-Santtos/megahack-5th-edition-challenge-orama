import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi';
import './style.css'


export default function SinginSuccess(){
    const createForm = () => {

    }
    
    return(
        <div className="singin">
            <div className="singin-card">
                <div className="singin-container">
                    <div className="singin-success">
                        <div>
                            <div className="logo-circle"></div>
                        </div>
                        <span>
                            Bom agora já sabemos o seu perfil, você é um investidor moderado usaremos isso para melhorar a sua experiencia e melhor guia-lo na nossa plataforma.
                        </span>
                    </div>       
                    <div className="singin-register">
                        <div>
                            <label>Agora vamos terminar o seu cadastro</label>
                            <from onSubmit={createForm}>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                            </from>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}