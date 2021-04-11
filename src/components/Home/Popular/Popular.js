import next from './img/next.svg'
import prev from './img/prev.svg'
import SinglePopular from './layout/SinglePopular'

const Popular = () => {
    return (
        <>
            <div className="Special2">
            <h3>Популярные категории</h3>
            <div className="button-popular">
            <button id="prev-btn"><img src={prev} alt=""/></button>
            <button id="next-btn"><img src={next} alt=""/></button>
            </div>
            </div>
            <hr/>
            <div className="popular">
                <SinglePopular/>
            </div>
        </>
    )
}

export default Popular
