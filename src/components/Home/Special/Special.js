import First from './img/First.svg'
import Second from './img/Second.svg'
import Third from './img/Third.svg'

const Special = () => {
    return (
        <>
         <div className="Special1">
            <h2>Специально для вас</h2>
            </div> 
            <div className="Special">
                <img src={First} alt=""/>
                <img src={Second} alt=""/>
                <img src={Third} alt=""/>
            </div>  
        </>
    )
}

export default Special
