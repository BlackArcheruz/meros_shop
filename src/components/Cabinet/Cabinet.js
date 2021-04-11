import React, { useState } from 'react'
import CabinetDashMob from '../Modals/CabinetDashMob'
import CabinetInput from './CabinetInput'
import CabinetMap from './CabinetMap'
import CabinetSide from './CabinetSide'
import MyDatas from './MyDatas'
import profile from './img/profile.svg'

const Cabinet = () => {
    const [show,setShow] = useState(false)
    return (
        <div className="container">
            <div className="cabinet-line">
                <a href="/">Главная / </a>
                <a href="/cabinet">Личный кабинет</a>
            </div>
            <button className="btn btn-display" onClick={()=>{setShow(true)}}><i className="fas fa-align-left"></i> Мои Данние</button>
            <div className="cabinet1">
            <CabinetSide/>
            <div className="cabinet">
            <MyDatas/>
            <div className="cabinet-flex">
            <CabinetInput/>
            <CabinetMap/>
            </div>
            </div>
            
            </div>
            <CabinetDashMob show={show} profile={profile} onClose={()=>{setShow(false)}}/>
        </div>
    )
}

export default Cabinet
