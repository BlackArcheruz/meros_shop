import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="list-footer">
                        <h3>Наши предложения</h3>
                        <Link to="/" className="grey-text">Meros Дисконт</Link>
                        <Link to="/" className="grey-text">Meros Мерч Бренд</Link>
                        <Link to="/" className="grey-text">Cкидки</Link>
                        <Link to="/" className="grey-text">Новинки</Link>
                        <Link to="/" className="grey-text">Коллекции</Link>
                        <Link to="/" className="grey-text">Распродажа</Link>
                        <Link to="/" className="grey-text">Популярные товары</Link>
                        <Link to="/" className="grey-text">Рекомендуемые товары</Link>
                    </div>
                    <div className="list-footer">
                        <h3>Сервис и поддержка</h3>
                        <Link to="/" className="grey-text">Бренды</Link>
                        <Link to="/" className="grey-text">Услуги</Link>
                        <Link to="/" className="grey-text">Оплата</Link>
                        <Link to="/" className="grey-text">Доставка</Link>
                        <Link to="/" className="grey-text">Обратная связь</Link>
                        <Link to="/" className="grey-text">Вопросы и ответы</Link>
                        <Link to="/" className="grey-text">Публичная оферта</Link>
                    </div>
                    <div className="list-footer">
                        <h3>О компании</h3>
                        <Link to="/" className="grey-text">О нас</Link>
                        <Link to="/" className="grey-text">Отзывы</Link>
                        <Link to="/" className="grey-text">Как пройти</Link>
                        <Link to="/" className="grey-text">Вакансии и карьера</Link>
                        <Link to="/" className="grey-text">Почему нам доверяют</Link>
                    </div>
                    <div className="list-footer">
                        <h3>Для связи</h3>
                        <p className="grey-text">+998 97 992 48 78</p>
                        <p className="grey-text">+998 71 123 48 78</p>
                        <p className="grey-text">merosshop@gmail.com</p>
                    </div>
                    <div className="list-footer">
                        <h3>Мы в соцсетях</h3>
                        <div className="social-link">
                        <a href="https://instagram.com" className="grey-icon"><i className="fab fa-instagram"></i></a>
                        <a href="https://telegram.org" className="grey-icon"><i className="fab fa-telegram"></i></a>
                        <a href="https://facebook.com" className="grey-icon"><i className="fab fa-facebook"></i></a>
                        </div>

                    </div>
                </div>
                <div className="footer-last">
                <hr/>
                <p className="grey-text">Meros Shop © 2020. Все права защищены.</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
