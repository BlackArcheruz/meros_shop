import React, { Fragment } from 'react'
import next from './img/next.svg'
import prev from './img/prev.svg'
import SingleBookCategSection from './SingleBookCategSection'

const BookCategSection = () => {
    return (
        <Fragment>
            <div className="Special2">
            <h3>Присмотритесь к категориям</h3>
            <div className="button-popular">
            <button id="prev-btn"><img src={prev} alt=""/></button>
            <button id="next-btn"><img src={next} alt=""/></button>
            </div>
            </div>
            <hr/>
            <SingleBookCategSection/>
        </Fragment>
    )
}

export default BookCategSection