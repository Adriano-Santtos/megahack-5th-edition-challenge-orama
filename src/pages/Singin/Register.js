import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './style.css'

export default function Register(){
    const [active, setActive] = useState(true)
    return(
        <div className="singin">
            <div className="singin-card">
                <div className="singin-container">
                    <div className="singin-logo">
                        <div className="logo">
                            <img src="./images/orama-logo.png" alt="logo" />
                        </div>
                    </div>
                    <div className="singin-content">
                        {active == true
                            ? <>
                                <div className="choose-content">
                                    <div className="number">1</div>
                                    <span className="">VOCÊ TEM R$5.000,00 APLICADOS EM AÇÕES DE UMA EMPRESA QUANDO, DE REPENTE, UMA MÁ NOTÍCIA NA ECONOMIA FAZ O VALOR DAS AÇÕES DESPENCAREM. VOCÊ:</span>
                                </div>
                                
                                <div className="choose-input">
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                </div>
                                <div className="choose-content">
                                    <div className="number">2</div>
                                    <span className="">VOCÊ TEM R$5.000,00 APLICADOS EM AÇÕES DE UMA EMPRESA QUANDO, DE REPENTE, UMA MÁ NOTÍCIA NA ECONOMIA FAZ O VALOR DAS AÇÕES DESPENCAREM. VOCÊ:</span>
                                </div>
                                
                                <div className="choose-input">
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                </div>        
                                <Link onClick={() => setActive(false)} className="singin-enter">
                                    <FiArrowRight size={26} color="#ffffff" />
                                </Link>
                            </>
                            : <>
                                <div className="choose-content">
                                    <div className="number">3</div>
                                    <span className="">VOCÊ TEM R$5.000,00 APLICADOS EM AÇÕES DE UMA EMPRESA QUANDO, DE REPENTE, UMA MÁ NOTÍCIA NA ECONOMIA FAZ O VALOR DAS AÇÕES DESPENCAREM. VOCÊ:</span>
                                </div>
                                
                                <div className="choose-input">
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                </div>
                                <div className="choose-content">
                                    <div className="number">4</div>
                                    <span className="">VOCÊ TEM R$5.000,00 APLICADOS EM AÇÕES DE UMA EMPRESA QUANDO, DE REPENTE, UMA MÁ NOTÍCIA NA ECONOMIA FAZ O VALOR DAS AÇÕES DESPENCAREM. VOCÊ:</span>
                                </div>
                                
                                <div className="choose-input">
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="scales" name="scales" checked />
                                        <label for="scales">Scales</label>
                                    </div>
                                </div>
                                <Link to="/success" className="singin-enter">
                                    <FiArrowRight size={26} color="#ffffff" />
                                </Link>
                            </>
                        }
                    </div>  
                </div>
            </div>
        </div>
    );
}