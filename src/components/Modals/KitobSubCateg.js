import React from 'react'

const KitobSubCateg = (props) => {
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
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>АКЦИИ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>НОВИНКИ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>БЕСТСЕЛЛЕРЫ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>КОРАН</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>ФИКХ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>ХАДИСОВЕДЕНИЕ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>ДЕТСКИЕ КНИГИ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>САМОРАЗВИТИЕ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>ИНОСТРАННЫЕ КНИГИ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>ИНОСТРАННЫЕ КНИГИ</span></a></li>
                <li><a href="/categories/books/worldbooks"><i className="fas fa-book"></i><span>ДРУГОЕ</span></a></li>
            </ul>
                </div>
            </div>
        </div>
    )
}
export default KitobSubCateg
