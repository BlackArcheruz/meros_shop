import {React, useState} from 'react'
import book from './img/product.png'
import visibility from '../Home/Products/img/others/visibility.svg'
import star from '../Home/Products/img/others/star.svg'
import trash from '../Home/Products/img/others/trash.svg'

const WorldBooksProducts = () => {
    const [products, setProducts] = useState(
        [
            {
                id:1,
                image: book,
                categ: "Книги",
                cost: "200 000 сум",
                button_name: "В корзину"
            },
            {
                id:2,
                image: book,
                categ: "Книги",
                cost: "200 000 сум",
                button_name: "В корзину"
            },
            {
                id:3,
                image: book,
                categ: "Книги",
                cost: "200 000 сум",
                button_name: "В корзину"
            },
            {
                id:4,
                image: book,
                categ: "Книги",
                cost: "200 000 сум",
                button_name: "В корзину"
            },
            {
                id:5,
                image: book,
                categ: "Книги",
                cost: "200 000 сум",
                button_name: "В корзину"
            },
            {
                id:6,
                image: book,
                categ: "Книги",
                cost: "200 000 сум",
                button_name: "В корзину"
            }
        ]
    )

    return (
        <div className="worldbook-products">
            {products.map((product)=>(
                        <div className="product-preview1 world-product-single" key={product.id}>
                            <div className="img-preview">
                <div className="img">
                            <img src={product.image} alt="" /></div>
                            <div className="img-icons">
                <img src={visibility} alt="" className="icon-img"/>
                <img src={star} alt="" className="icon-img"/>
                <img src={trash} alt="" className="icon-img"/>
                </div></div>
                            <p>{product.categ}</p>
                            <h2>{product.cost}</h2>
                            <button className="btn btn-primary product-btn">{product.button_name}</button>
                        </div>
            ))}
        </div>
    )
}

export default WorldBooksProducts
