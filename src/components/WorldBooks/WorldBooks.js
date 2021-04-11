import React,{useState} from 'react'
import Recommend from './Recommend/Recommend'
import Section from '../Home/Section/Section'
import WorldBooksContent from './WorldBooksContent'
import WorldBooksFilter from './WorldBooksFilter'
import WorldBooksProducts from './WorldBooksProducts'
import KitobCateg from '../Modals/KitobCateg'

const DunyoKitoblari = () => {
    const [show,setShow] = useState(false)
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
