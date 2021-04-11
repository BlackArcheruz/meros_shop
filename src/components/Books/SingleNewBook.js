import React, {Fragment, useState} from 'react'

const SingleNewBook = ({product, Stars}) => {
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
            <div className="first-list newbook-single-component">
            {recommends.map((recommend)=>(
                        <div className="product-preview" key={recommend.id}>
                            <img src={product} alt="" />
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

export default SingleNewBook
