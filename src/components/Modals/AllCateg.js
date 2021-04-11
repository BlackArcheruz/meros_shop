import search from './img/search.svg'
import book from './img/book.svg'
import disc from './img/disc.svg'
import rulerpen from './img/ruler-pen.svg'
import tshirt from './img/tshirt.svg'
import dress from './img/dress.svg'
import child from './img/child.svg'
import jewelry from './img/jewelry.svg'
import safari from './img/safari.svg'
import parfumeriya from './img/parfumeriya.svg'
import bread from './img/bread.svg'
import drop from './img/drop.svg'
import krasota from './img/krasota.svg'
import oil from './img/oil.svg'
import jug from './img/jug.svg'
import sofa from './img/sofa.svg'
import posuda from './img/posuda.svg'
import {CSSTransition} from 'react-transition-group'

const AllCateg = props => {
    if(!props.show){
        return null
    }
    return (
        <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{enter:0, exit:300}}>
        <div className="all-categ-modal" onClick={props.onClose}>
            <div className="all-categ-modal-content" onClick={e=>e.stopPropagation()}>
                <div className="all-categ-modal-header">
                    <div className="all-categ-modal-title"><img src={search} alt=""></img> Все категории</div> <div className="all-categ-modal-close" onClick={props.onClose}><button>&times;</button></div>  
                </div>
                <div className="all-categ-modal-body">
                    <div className="all-categ-modal-first-list">
                    <div className="all-categ-modal-item"><img src={book} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={disc} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={safari} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={rulerpen} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={tshirt} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={dress} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={child} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={jewelry} alt=""></img><span>Книги</span></div>
                    </div>
                    <div className="all-categ-modal-first-list1">
                    <div className="all-categ-modal-item"><img src={parfumeriya} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={bread} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={drop} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={krasota} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={oil} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={jug} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={sofa} alt=""></img><span>Книги</span></div>
                    <div className="all-categ-modal-item"><img src={posuda} alt=""></img><span>Книги</span></div>
                    </div>
                </div>
            </div>
        </div>
        </CSSTransition>
    )
}

export default AllCateg
