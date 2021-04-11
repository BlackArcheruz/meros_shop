import First from './img/First.svg'
import Second from './img/Second.svg'
import Third from './img/Third.svg'

const BookShowcase = () => {
    return (
        <div>
                <div className="Special">
                <img src={First} alt=""/>
                <img src={Second} alt=""/>
                <img src={Third} alt=""/>
            </div> 
        </div>
    )
}

export default BookShowcase
