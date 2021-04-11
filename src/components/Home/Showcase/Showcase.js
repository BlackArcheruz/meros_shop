import Big from './img/Big.svg'
import Second from './img/Second.svg'
import Third from './img/Third.svg'
import Last from './Last'

const Showcase = () => {
    return (
        <>
        <div className="Showcase">
            <div className="big-ad">
                <img src={Big} alt=""/>
            </div>
            <div className="small-ad">
                <img src={Second} className="second-img" alt=""/>
                <img src={Third} alt=""/>
            </div>
        </div>
        <Last/>
        </>
    )
}

export default Showcase
