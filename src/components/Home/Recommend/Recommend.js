import {Fragment} from 'react'
import next from './img/next.svg'
import prev from './img/prev.svg'
import recommend from './img/recommend.svg'
import Stars from './img/Stars.svg'
import SingleRecommend from './SingleRecommend'

const Recommend = () => {
    return (
        <Fragment>
            <div className="Special2">
            <h3>Рекомендации для вас</h3>
            <div className="button-popular">
            <button id="prev-btn"><img src={prev} alt=""/></button>
            <button id="next-btn"><img src={next} alt=""/></button>
            </div>
            </div>
            <hr/>
            <SingleRecommend product={recommend} Stars={Stars}/>
        </Fragment>
    )
}

export default Recommend
