import { useState } from 'react'
import CabinetDash from '../Modals/CabinetDash'
import profile from './img/profile.svg'
import profileSvg from './img/profile-svg.svg'

const CabinetSide = () => {
    const [show, setShow] = useState(false)

    return (
        <>
        <div className="cabinet-side">
            <img src={profile} alt=""/>
            <div className="cabinet-side1">
            <h2>Вахабов Абдулбасит</h2>
            <button className="primary-text button-dash" onClick={()=>setShow(true)}>Изменить профиль</button>
            <h4>Покупки</h4>
            <a href="/cabinet" className="grey-text">Заказы</a>
            <a href="/cabinet" className="grey-text">Купленные товары</a>
            <a href="/cabinet" className="grey-text">Регулярные доставки</a>
            <a href="/cabinet" className="grey-text">Возвраты</a>
            <a href="/cabinet" className="grey-text">Цифровые товары</a>
            <a href="/cabinet" className="grey-text">Для меня</a>
            <h4>Личная информация</h4>
            <a href="/cabinet" className="grey-text">Мои данные</a>
            <a href="/cabinet" className="grey-text">Мои отзывы</a>
            <a href="/cabinet" className="grey-text">Баллы</a>
            <a href="/cabinet" className="grey-text">Кодовое слово</a>
            <a href="/cabinet" className="grey-text">Meros Дисконт %</a>
            <a href="/cabinet" className="grey-text">Сохранённые карты</a>
            <a href="/cabinet" className="grey-text">Meros Card</a>
            <h4>Акции и подписки</h4>
            <a href="/cabinet" className="grey-text">Акция "1+1=3"</a>
            <a href="/cabinet" className="grey-text">Настройки уведомлений</a>
            <h4>Доставка и магазин</h4>
            <a href="/cabinet" className="grey-text">Ташкент</a>
            <a href="/cabinet" className="grey-text">Наши официальные магазины на карте</a>
            <a href="/cabinet" className="grey-text">Стоимость доставки </a>
            <h4>Центр коммуникации</h4>
            <a href="/cabinet" className="grey-text">Уведомления</a>
            <a href="/cabinet" className="grey-text">Сообщения</a>
            <a href="/cabinet" className="grey-text">Помощь</a>
            <h4>Популярные вопросы</h4>
            <a href="/cabinet" className="grey-text">Способы доставки</a>
            <a href="/cabinet" className="grey-text">Способы оплаты</a>
            <h4>Приложение</h4>
            <a href="/cabinet" className="grey-text">Возврат товаров</a>
            <a href="/cabinet" className="grey-text">Аккаунт и безопасность</a>
            <a href="/cabinet" className="grey-text">О приложение</a>
            </div>
        </div>
        <CabinetDash show={show} onClose={()=>{setShow(false)}} profile={profileSvg}/>
        </>
    )
}

export default CabinetSide
