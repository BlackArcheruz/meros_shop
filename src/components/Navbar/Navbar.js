import TopNav from './TopNav'
import MiddleNav from './MiddleNav'
import LastNav from './LastNav'
import { useState } from 'react'
import AllCategMob from '../Modals/AllCategMob'

const Navbar = () => {
    const [show,setShow] = useState(false)
    return (
        <header>
        <div className="container">
            <TopNav/>
            <MiddleNav/>
            <LastNav/>
            <button className="btn btn-display" onClick={()=>{setShow(true)}}><i className="fas fa-align-left"></i> Категории</button>
            <AllCategMob show={show} onClose={()=>{setShow(false)}}/>
        </div>
        </header>
    )
}

export default Navbar
