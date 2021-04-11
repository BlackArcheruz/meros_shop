import React from 'react'
import TrashOfor from './TrashOfor'
import TrashSide from './TrashSide'

const Trash = () => {
    return (
        <div className="container">
            <div className="cabinet-line">
                <a href="/">Главная / </a>
                <a href="/cabinet">Корзина</a>
            </div>
            <h2 className="h2">Корзина</h2>
            <div className="korzinka">
                <TrashSide/>
                <TrashOfor/>
            </div>
        </div>
    )
}

export default Trash
