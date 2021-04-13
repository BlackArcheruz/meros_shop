import React from 'react'

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
                <li><a href="/categories/books"><i className="fas fa-book"></i><span>Книги</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-glass-martini"></i><span>Сувениры</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-male"></i><span>Для мужчин</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-female"></i><span>Для женщин</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-child"></i><span>Для детей</span></a></li>
                <li><a href="/categories/books"><i className="fab fa-creative-commons-by"></i><span>Атрибутика</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-heartbeat"></i><span>Личение и здоровые</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-utensils"></i><span>Продукты питания</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-gift"></i><span>Идеи подарка</span></a></li>
                <li><a href="/categories/books"><i className="fas fa-tshirt"></i><span>Meros Мерч</span></a></li>
            </ul>
                </div>
            </div>
        </div>
    )
}

export default AllCategMob
