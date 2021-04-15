import React from 'react'
import TrashOfor from '../Trash/TrashOfor'

const MyOrders = () => {
    return (
        <div className="container">
            <div className="cabinet-line">
                <a href="/">Главная /</a>
                <a href="/korzina">Корзина</a>
            </div>
            <h2 className="h2">Оформление</h2>
            <div className="korzinka">
                <TrashOfor/>
            </div>
        </div>
    )
}

export default MyOrders
