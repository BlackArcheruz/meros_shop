import {Fragment, useState} from 'react'
import visibility from './img/visibility.svg'
import star from './img/star.svg'
import trash from './img/trash.svg'

const SingleRecommend = ({product, Stars}) => {
    const style = {
        "border": "none",
        "background": "none",
        "outline": "none"
    }
    const [recommends,setRecommends] = useState([
        {
            id: 1,
            sale: "-54%",
            categ: "Книги",
            cost: "200 000 сум",
            button_name: "В корзину"
        },
        {
            id: 2,
            sale: "-54%",
            categ: "Книги",
            cost: "200 000 сум",
            button_name: "В корзину"
        },
        {
            id: 3,
            sale: "-54%",
            categ: "Книги",
            cost: "200 000 сум",
            button_name: "В корзину"
        },
        {
            id: 4,
            sale: "-54%",
            categ: "Книги",
            cost: "200 000 сум",
            button_name: "В корзину"
        },
        {
            id: 5,
            sale: "-54%",
            categ: "Книги",
            cost: "200 000 сум",
            button_name: "В корзину"
        }
    ]);
    return (
        <Fragment>
            <div className="first-list recommend-list1">
            {recommends.map((recommend)=>(
                        <div className="product-preview" key={recommend.id}>
                            <div className="img-preview">
                <div className="img">
                <img src={product} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                            <span>{recommend.sale}</span>
                            <p>{recommend.categ}</p>
                            <img src={Stars} alt="" className="stars"/>
                            <h2>{recommend.cost}</h2>
                            <button className="btn btn-primary product-btn">{recommend.button_name}</button>
                        </div>
            ))}
            </div>
        </Fragment>
    )
}

export default SingleRecommend
