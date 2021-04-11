import Bigad from './img/Bigad.svg'

const BookNav = () => {
    return (
        <div className="sub-nav1">
        <div className="sub-nav">
            <ul>
                <li><b><a href="/" className="primary-text">АКЦИИ</a></b></li>
                <li><b><a href="/" className="text1">НОВИНКИ</a></b></li>
                <li><b><a href="/" className="text1">БЕСТСЕЛЛЕРЫ</a></b></li>
                <li><b><a href="/" className="text1">КОРАН</a></b></li>
                <li><b><a href="/" className="text1">ФИКХ</a></b></li>
                <li><b><a href="/" className="text1">ХАДИСОВЕДЕНИЕ</a></b></li>
                <li><b><a href="/" className="text1">ДЕТСКИЕ КНИГИ </a></b></li>
                <li><b><a href="/" className="text1">САМОРАЗВИТИЕ</a></b></li>
                <li><b><a href="/" className="text1">ИНОСТРАННЫЕ КНИГИ</a></b></li>
                <li><b><a href="/" className="text1">ДРУГОЕ</a></b></li>
            </ul>
        </div>
        <img src={Bigad} alt=""/>
        </div>
    )
}

export default BookNav
