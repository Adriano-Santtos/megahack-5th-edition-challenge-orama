import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'


export default function Home() {
    return (
        <div className="container">
            <div className="card-a">
                <img src="./images/carteira.svg" />
            </div>
            <div className="card-b">
                <img src="./images/orama-logo.svg" />
                <div className="card-btn">
                    <Link to="/login" type="button" className="btn-a">login</Link>
                    <Link to="/singin" type="button" className="btn-b">sing in</Link>
                </div>
            </div>
        </div>
    );
}