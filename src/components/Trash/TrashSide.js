import React, { Fragment } from 'react'

const TrashSide = () => {
    return (
        <Fragment>
            <div className="trash-for">
        <div className="Special2">
            <div className="checkbox-trash">
            <input type="checkbox" /> <h3>Выбрать все</h3>
            </div>
            <div className="trash-red">
                <p className="red-text">Удалить выбранные</p>
            </div> 
        </div>
        <hr/>
        <div className="trash-product">
            <div className="checkbox-trash-product">
                <input type="checkbox"/>
            </div>
            <div className="rectangle">

            </div>
            <div className="single-product-trash">
                <p>Обложка для паспорта</p>
                <span className="greenBox">Есть на складе</span>
                <span className="redBox">1+1=3</span>
            </div>
            <div className="counter-content">
                <button>+</button>
                <span>1</span>
                <button>-</button>
            </div>
            <div className="trash-icon">
                <i className="fas fa-trash"></i>
            </div>
        </div>
        </div>
        </Fragment>
    )
}

export default TrashSide
