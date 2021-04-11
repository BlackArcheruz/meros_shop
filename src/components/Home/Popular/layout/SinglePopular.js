import book from '../img/book.svg'
import food from '../img/food.svg'
import oil from '../img/oil.svg'
import sofa from '../img/sofa.svg'
import taqinchoq from '../img/taqinchoq.svg'
import { useState } from 'react'

const SinglePopular = () => {
    const [populars, setPopulars] = useState([
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
    ])
    return (
        <>
        {populars.map((popular)=>(
            <div className="single-popular" key={popular.id}>
                <img src={popular.image_src} alt=""/>
                <div className="popular-single-text"><h3>{popular.categ}</h3></div>
                </div>
        ))}
        </>
    )
}

export default SinglePopular
