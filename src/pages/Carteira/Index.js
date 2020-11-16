import React from 'react'
import { MdAdd } from 'react-icons/md'
import Sidebar from '../../components/Sidebar/Index'
import './style.css'


const Carteira = () => {
  return (

    <div className="row">
      <Sidebar />
      <div className="col">

        <div className="card-media">
          <img src="./images/group-37.svg" />
        </div>
        <div className="card-gastos-variaveis">
          <p>Gastos variáveis</p>
          <img src="./images/graficos-v.svg" className="img-fluid" />
        </div>
        <div className="card-orcamento">
          <p>Orçamento</p>
          <img src="./images/group-38.svg" />
        </div>
      </div>
      <div className="col">
        <div className="calender">
          <img src="./images/calendário.svg" />
        </div>
        <div className="historico">
          <h3>Historico</h3>
          <button className="btn-add">
            <MdAdd />
          </button>
        </div>
      </div>
    </div>


  )
}

export default Carteira