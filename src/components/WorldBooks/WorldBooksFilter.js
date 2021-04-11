import React from 'react'

const WorldBooksFilter = () => {
    return (
        <div className="cabinet-side">
            <div className="filter-worldbook">
            <div className="worldbook-filter">
            <h2 className="h2">Категория</h2>
            <a href="/categories/books"><h3 className="grey-text"><i className="fas fa-chevron-left"></i> Книги</h3></a>
            <a href="/categories/books/worldbooks"><h3 className="grey-text"><i className="fas fa-chevron-left"></i> Художественная литература</h3></a>
            </div>
            <div className="bestseller">
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            <h3>Бестселлеры </h3><input type="checkbox" name="" id=""/>
            </div>
            <h2 className="h2-filter">Тип книги </h2>
            <div className="type">
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            <h3>Печатная книга </h3><input type="checkbox" name="" id=""/>
            </div>
            </div>
        </div>
    )
}

export default WorldBooksFilter
