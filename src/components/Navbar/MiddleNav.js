import Logo from './img/Group 53.svg'
import Katalog from './img/Katalog.svg'
import Times from './img/Times.svg'
import Search from './img/Search.svg'
import Categ from './img/Categ.svg'
import Profile from './img/Profile.svg'
import Star from './img/Star.svg'
import Savat from './img/Savat.svg'
import {Fragment, useState} from 'react'
import AllCateg from '../Modals/AllCateg'
import KatalogModal from '../Modals/Katalog'
import {Link} from 'react-router-dom'

const MiddleNav = () => {
    const [show,setShow] = useState(false);
    const [katalogShow,setKatalogShow] = useState(false);
    return (
        <Fragment>
            <div className="MiddleNav">
            <div className="logo">
                <Link to="/">
                <img src={Logo} alt=""/>
                </Link>
            </div>
            <div className="catalog-button">
                <button className={katalogShow === true ? 'btn katalog-btn-showed' : `btn btn-primary`} onClick={()=>{setKatalogShow(true)}}><img src={katalogShow === false ? Katalog : Times} alt=""/> Каталог</button>
            </div>
            <div className="search">
                    <input list="options" type="text" placeholder="Поиск по товаром..." className="search-input"/>
                    {/* <datalist id="options">
                        <option value="Мужская Одежда">Мужская Одежда</option>
                        <option value="Мужская Одежда">Мужская Одежда</option>
                        <option value="Мужская Одежда">Мужская Одежда</option>
                        <option value="Мужская Одежда">Мужская Одежда</option>
                    </datalist> */}
                    <button className="btn-light-sm search-button" onClick={()=>{setShow(true)}}>Все категории <img src={Categ} alt=""/></button>
                    <button className="btn btn-primary-sm"><img src={Search} alt=""/></button>
            </div>
            <div className="icons">
                <img src={Profile} alt=""/><Link to="/cabinet">Войти</Link> 
                <img src={Star} alt=""/><Link to="/forward">Избранное</Link> 
                <img src={Savat} alt=""/><Link to="/korzina">Корзина</Link> 
            </div>
            </div>
            <AllCateg show={show} onClose={()=>{setShow(false)}}/>
            <KatalogModal show={katalogShow} onClose={()=>{setKatalogShow(false)}}/>
        </Fragment>
    )
}

export default MiddleNav
