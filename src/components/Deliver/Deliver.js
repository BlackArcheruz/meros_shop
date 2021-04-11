import First from './img/First.svg'
import Second from './img/Second.svg'
import Third from './img/Third.svg'

const Deliver = () => {
    return (
        <div className="deliver">
            <div className="container">
                <div className="deliver-content">
                <div className="deliver-single">
                    <div className="deliver-text">
                        <h4>Доставка по всему Узбекистану</h4>
                        <p>Условия доставки</p>
                    </div>
                    <div className="deliver-img">
                        <img src={First} alt=""/>
                    </div>
                </div>
                <div className="deliver-single">
                <div className="deliver-text">
                    <h4>Установите мобильное приложение</h4>
                    <p>Установить</p>
                    </div>
                    <div className="deliver-img">
                    <img src={Second} alt=""/>
                    </div>
                </div>

                <div className="deliver-single">
                <div className="deliver-text">
                    <h4>Оплата наличными или картой</h4>
                    <p>Условия оплаты</p>
                    </div>
                    <div className="deliver-img">
                    <img src={Third} alt=""/>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Deliver
