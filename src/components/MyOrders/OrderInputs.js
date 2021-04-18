import React from 'react'

const OrderInputs = () => {
    return (
        <>
        <div className="order-inputs1">
        <div className="order-inputs">
            <div className="first-order-input">
                <label>Выберите область</label>
                <select value="Область" className="auth-input">
                        <option value="Область" disabled>Область</option>
                        <option value="Ташкент">Ташкент</option>
                </select>
                </div>
                <div className="first-order-input">
                <label>Район</label>
                <select value="Район" className="auth-input">
                        <option value="Район" disabled>Район</option>
                        <option value="Ташкент">Ташкент</option>
                </select>
                </div>
                </div>
                <div className="first-order-input"> 
                <label>Адрес</label>
                    <input type="text" className="auth-input" placeholder="пример: Ташкентская область, Бектемирский район, улица ..."/>
                </div>
                <div className="order-inputs">
                <div className="first-order-input"> 
                <label>ФИО получателя</label>
                    <input type="text" className="auth-input" placeholder="Имя фамилия"/>
                </div>
                <div className="first-order-input"> 
                <label>Номер телефона</label>
                    <input type="text" className="auth-input" placeholder="+998 9..."/>
                </div>
                </div>  
        </div>
        </>
    )
}

export default OrderInputs
