import React, { Fragment } from 'react'
import BookNav from './BookNav'
import BookShowcase from './BookShowcase'
import NewBook from './NewBook'
import Big from './img/Big.svg'
import BookCategSection from './BookCategSection'
import Deliver from '../Deliver/Deliver'
import Brands from '../Brands/Brands'
import Products from '../Home/Products/Products'

const Books = () => {
    return (
        <Fragment>
            <div className="container">
                <h2 className="h2">Книги <span className="grey-text book-h2">2500 товаров</span></h2>
                <BookNav/>
                <BookShowcase/>
                <NewBook/>
                <div className="big-ad book-big-ad">
                <img src={Big} alt=""/>
                </div>
                <BookCategSection/>
                <Products/>
            </div>
            <Deliver/>
            <div className="container">
            <Brands/>
            </div>
        </Fragment>
    )
}

export default Books
