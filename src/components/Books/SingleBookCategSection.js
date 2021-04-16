import React, {Fragment, useState} from 'react'
import book from '../Home/Popular/img/book.svg'
import food from '../Home/Popular/img/food.svg'
import oil from '../Home/Popular/img/oil.svg'
import sofa from '../Home/Popular/img/sofa.svg'
import taqinchoq from '../Home/Popular/img/taqinchoq.svg'
import {Link} from 'react-router-dom'

const SingleNewBook = () => {
    const [populars,setPopulars] = useState([
        {
            id: 1,
            categ: "Книги",
            image_src: book
        },
        {
            id: 2,
            categ: "Дом и интерьер",
            image_src: sofa
        },
        {
            id: 3,
            categ: "Ювелирные изделия",
            image_src: taqinchoq
        },
        {
            id: 4,
            categ: "Натуральные масла",
            image_src: oil
        },
        {
            id: 5,
            categ: "Продукты питания",
            image_src: food
        }
    ]);
    return (
        <Fragment>
            <div className="first-list">
            {populars.map((popular)=>(
                <Link to="/categories/books/worldbooks" className="single-popular">
            <div className="single-popular" key={populars.id}>
                <img src={popular.image_src} alt=""/>
                <div className="popular-single-text dark-text"><h3>{popular.categ}</h3></div>
                </div>
                </Link>
            ))}
            </div>
        </Fragment>
    )
}

export default SingleNewBook
