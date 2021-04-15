import React,{useState} from 'react'
import Recommend from './Recommend/Recommend'
import Section from '../Home/Section/Section'
import WorldBooksContent from './WorldBooksContent'
import WorldBooksFilter from './WorldBooksFilter'
import WorldBooksProducts from './WorldBooksProducts'
import KitobCateg from '../Modals/KitobCateg'
import KitobSubCateg from '../Modals/KitobSubCateg'

const DunyoKitoblari = () => {
    const [show,setShow] = useState(false)
    const style = {"background": "none", "border": "none", "color": "#273142", "cursor": "pointer", "fontSize": "x-large"}
    return (
        <div className="container">
                <div className="cabinet-line">
                <a href="/categories/books">Книги / </a>
                <a href="/categories/books/worldbooks">Художественная литература</a>
            </div>
            <h2 className="h2">Художественная литература</h2>
            <button className="btn btn-display" onClick={()=>{setShow(true)}}><i className="fas fa-align-left"></i> Все Филтри</button>
            <div className="cabinet1">
                <WorldBooksFilter/>
                <div className="cabinet">
                <WorldBooksContent/>
                <hr/>
                <WorldBooksProducts/>
                <div className="button-pagination">
                <button style={style}>&laquo;</button>
                <button style={style}>1</button>
                <button style={style}>2</button>
                <button style={style}>3</button>
                <button style={style}>4</button>
                <button style={style}>...</button>
                <button style={style}>&raquo;</button>
                </div>
                </div>
            </div>
            <Section/>
            <WorldBooksProducts/>
                <Section/>
                <Recommend/>
            <KitobCateg show={show} onClose={()=>{setShow(false)}}/>
        </div>
    )
}

export default DunyoKitoblari
