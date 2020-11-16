import React from 'react'
import Sidebar from '../../components/Sidebar/Index'
import './style.css'



const Investimentos = () => {
  return (
    <>
      <div className='row fluid'>
        <div className="col side">
          <Sidebar />
        </div>


        <div className="col">
          <div className="row">
            <img src='./images/investing.svg' className="img-fluid" />
          </div>
          <div className="col">
            <div className="btn renda-v">
              <p>Renda variavel</p>
            </div>
            <div className="btn rtd">
              <p>Renda tesouro direto</p>
            </div>
            <div className="btn rf">
              <p>Renda fixa</p>
            </div>
            <div className="btn acao">
              <p>Ações</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Investimentos