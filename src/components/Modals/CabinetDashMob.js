import React from 'react'

const CabinetDashMob = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className="all-categ-mob-modal" onClick={props.onClose}>
            <div className="all-categ-mob-modal-content" onClick={e=>e.stopPropagation()}>
                <div className="all-categ-mob-modal-header">
                    <div className="all-categ-modal-close" onClick={props.onClose}><button>&times;</button></div>  
                </div>
                <div className="kitob-categ-body">
                <img src={props.profile} alt=""/>
            <div className="kitob-categ-body cabinet-mob">
            <h2>Вахабов Абдулбасит</h2>
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
            </div>
                </div>
            </div>
        </div>
    )
}

export default CabinetDashMob