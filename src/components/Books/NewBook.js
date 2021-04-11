import React, { Fragment } from 'react'
import next from './img/next.svg'
import prev from './img/prev.svg'
import recommend from './img/recommend.svg'
import Stars from './img/Stars.svg'
import SingleNewBook from './SingleNewBook'

const NewBook = () => {
    return (
        <Fragment>
            <div className="Special2">
            <h3>Книжные новинки</h3>
            <div className="button-popular">
            <button id="prev-btn"><img src={prev} alt=""/></button>
            <button id="next-btn"><img src={next} alt=""/></button>
            </div>
            </div>
            <hr/>
            <SingleNewBook product={recommend} Stars={Stars}/>
        </Fragment>
    )
}

export default NewBook
