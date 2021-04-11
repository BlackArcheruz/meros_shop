import React from 'react'

const TrashOfor = () => {
    return (
        <div className="trash-ofor">
            <div className="content-trash-ofor">
                <div className="content-product-price">
                    <div className="content-price">
                    <div className="price">Стоимость:</div>
                    <div className="price">Доставка:</div>
                    <div className="price">Скидка:</div>
                    </div>
                    <div className="price-cost">
                        <h5 className="grey-text">250 000 UZS</h5>
                        <h5 className="grey-text">20 000 UZS</h5>
                        <h5 className="red-text">-15 000 UZS</h5>
                    </div>
                </div>
                <hr/>
                <div className="content-opshiy">
                        <h3>К оплате:</h3>
                    <h3>255 000 UZS</h3>
                </div>
            </div>
            <button className="btn btn-primary">Оформить заказ</button>
        </div>
    )
}

export default TrashOfor
