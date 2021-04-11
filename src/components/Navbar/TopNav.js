import {Fragment} from 'react'
import location from './img/location-icon.svg'

const TopNav = () => {
    return (
        <Fragment>
        <div className="TopNav">
            <div className="language">
                <a href="/" className="lang-link1">Русский</a>
                <span className="lang-span">|</span>
                <a href="/" className="lang-link">O'zbekcha</a>
                <span className="lang-span">|</span>
                <a href="/" className="lang-link3">Ўзбекча</a>
            </div>
            <div className="location">
                <img src={location} alt=""/>
                <a href="/" className="active-location">Ташкент</a>
                <a href="/" className="location-link">Мобильное приложение</a>
                <a href="/" className="location-link">Скидки</a>
                <a href="/" className="location-link">Помощь</a>
                <a href="/" className="location-link">Адреса магазинов</a>
                <a href="/" className="location-link last-link">Доставка</a>
            </div>
        </div>
        <hr/>
        </Fragment>
    )
}

export default TopNav
