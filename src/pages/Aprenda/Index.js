import React from 'react'
import { MdAccountBalance, MdAccountBalanceWallet, MdAttachMoney, MdDashboard, MdLocalConvenienceStore, MdLocalLibrary, MdLocalParking, MdShop, MdTimer } from 'react-icons/md'
import Sidebar from '../../components/Sidebar/Index'
import "./style.css"



const Aprenda = () => {
  return (
    <div className="container-aprenda">
      <div className="row">
        <Sidebar />
        <div className="col">
          <div className="row">
            <div className="card item1">
              <MdLocalLibrary className="icon" />
              <p>Educação financeira</p>
            </div>
            <div className="card ">
              <MdTimer className="icon" />
              <p>Controle financeiro</p>
            </div>
            <div className="card item1">
              <MdAttachMoney className="icon  " />
              <p>investir em ações</p>
            </div>

          </div>
          <div className="row">
            <div className="card item1">
              <MdAccountBalance className="icon" />
              <p>Fundos imobiliarios</p>
            </div>
            <div className="card item1">
              <MdAccountBalanceWallet className="icon" />
              <p>Reserva de emergência</p>
            </div>
            <div className="card item1">
              <MdDashboard className="icon" />
              <p>Diversificação da carteira</p>
            </div>
          </div>
          <div className="row">
            <div className="card item1">
              <MdShop className="icon" />
              <p>Renda extra</p>
            </div>
            <div className="card item1">
              <MdLocalConvenienceStore className="icon" />
              <p>Previdência privada</p>
            </div>
            <div className="card item1">
              <MdLocalParking className="icon" />
              <p>Oferta Pública</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Aprenda