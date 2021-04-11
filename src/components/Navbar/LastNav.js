import {Link} from 'react-router-dom'

const LastNav = () => {
    return (
        <nav className="LastNav">
            <ul>
                <li><Link to="/categories/books">Книги</Link></li>
                <li><Link to="/categories/books">Сувениры</Link></li>
                <li><Link to="/categories/books">Для мужчин</Link></li>
                <li><Link to="/categories/books">Для женщин</Link></li>
                <li><Link to="/categories/books">Для детей</Link></li>
                <li><Link to="/categories/books">Атрибутика</Link></li>
                <li><Link to="/categories/books">Личение и здоровые</Link></li>
                <li><Link to="/categories/books">Продукты питания</Link></li>
                <li><Link to="/categories/books">Идеи подарка</Link></li>
                <li><Link to="/categories/books">Meros Мерч</Link></li>
                <li><Link to="/categories/books">Meros Dисконт</Link></li>
            </ul>
        </nav>
    )
}

export default LastNav
