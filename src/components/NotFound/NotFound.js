import React from 'react'

const NotFound = () => {
    return (
        <div className="container NotFound">
            <h2 className="h2">Извините, эта страница не найдена</h2>
            <h1 className="red-text h2" style={{"fontSize": "45px"}}>404</h1>
            <a href="/" className="primary-text not-404"><i className="fas fa-home"></i> Возвращаться на Главную страницу</a>
        </div>
    )
}

export default NotFound
