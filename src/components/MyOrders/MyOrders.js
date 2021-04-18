import React from 'react'
import TrashOfor from '../Trash/TrashOfor'
import OrderInputs from './OrderInputs'

const MyOrders = () => {
    return (
        <div className="container">
            <div className="cabinet-line">
                <a href="/">Главная /</a>
                <a href="/korzina">Корзина</a>
            </div>
            <h2 className="h2">Оформление</h2>
            <div className="korzinka">
                <OrderInputs/>
                <TrashOfor/>
            </div>
        </div>
    )
}

export default MyOrders
