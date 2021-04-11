import React from 'react'
import {Link} from 'react-router-dom'

const AllCategMob = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className="all-categ-mob-modal" onClick={props.onClose}>
            <div className="all-categ-mob-modal-content" onClick={e=>e.stopPropagation()}>
                <div className="all-categ-mob-modal-header">
                    <div className="all-categ-modal-close" onClick={props.onClose}><button>&times;</button></div>  
                </div>
                <div className="all-categ-mob-modal-body">
                <ul>
                <li><Link to="/categories/books"><i className="fas fa-book"></i> Книги</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-glass-martini"></i> Сувениры</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-male"></i> Для мужчин</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-female"></i> Для женщин</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-child"></i> Для детей</Link></li>
                <li><Link to="/categories/books"><i className="fab fa-creative-commons-by"></i> Атрибутика</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-heartbeat"></i> Личение и здоровые</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-utensils"></i> Продукты питания</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-gift"></i> Идеи подарка</Link></li>
                <li><Link to="/categories/books"><i className="fas fa-tshirt"></i> Meros Мерч</Link></li>
            </ul>
                </div>
            </div>
        </div>
    )
}

export default AllCategMob
