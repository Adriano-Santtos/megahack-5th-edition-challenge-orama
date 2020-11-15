import React from 'react';
import { Link } from 'react-router-dom'
import { MdSettings, MdHome, MdHelp, MdSchool, MdMonetizationOn, MdInsertChart } from 'react-icons/md';

import './style.css'

export default function Dashboard(){
    return(
        <div className="container-dashboard">
            <div className="card-dashboard">
                <div className="sidebar-dashboard">
                    <ul>
                        <li><MdHome size={25} color="#ffffff" /><Link to="/login" className="link-dashboard">Home</Link></li>
                        <li><MdSchool size={25} color="#ffffff" /><Link className="link-dashboard"></Link>Aprenda +</li>
                        <li><MdMonetizationOn size={20} color="#ffffff" /><Link className="link-dashboard"></Link>Carteira</li>
                        <li><MdInsertChart size={20} color="#ffffff" /><Link className="link-dashboard"></Link>Investimento</li>
                        <li><MdSettings size={20} color="#ffffff" /><Link className="link-dashboard"></Link>Configurações</li>
                        <li><MdHelp size={20} color="#ffffff" /><Link className="link-dashboard"></Link>Ajuda</li>
                    </ul>
                </div>
                <div className="content-dashboard">
                    <div className="header-dashboard">Teste</div>
                    <div className="content">Teste</div>
                </div>
            </div>
        </div>
    );
}