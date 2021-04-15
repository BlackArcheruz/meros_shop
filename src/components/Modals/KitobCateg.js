import React from 'react'

const KitobCateg = (props) => {
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
                    <div className="kitob-categ-body">
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="bestseller-mob"><h3>Бестселлеры </h3><input type="checkbox" name="" id=""/></div>
            <div className="types-cat">
            <div className="type-mob"><h3>Печатная книга </h3><input type="checkbox" name="" id=""/></div>
            <div className="type-mob"><h3>Печатная книга </h3><input type="checkbox" name="" id=""/></div>
            <div className="type-mob"><h3>Печатная книга </h3><input type="checkbox" name="" id=""/></div>
            <div className="type-mob"><h3>Печатная книга </h3><input type="checkbox" name="" id=""/></div>
            <div className="type-mob"><h3>Печатная книга </h3><input type="checkbox" name="" id=""/></div>
            <div className="type-mob"><h3>Печатная книга </h3><input type="checkbox" name="" id=""/></div>
            <div className="type-mob"><h3>Печатная книга </h3><input type="checkbox" name="" id=""/></div>
            </div></div></div>
            </div>
        </div>
    )
}
export default KitobCateg
