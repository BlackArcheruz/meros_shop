import TopNav from './TopNav'
import MiddleNav from './MiddleNav'
import LastNav from './LastNav'
import { useState } from 'react'
import AllCategMob from '../Modals/AllCategMob'
import KitobSubCateg from '../Modals/KitobSubCateg'

const Navbar = () => {
    const [show,setShow] = useState(false);
    const [subCategShow, setSubCategShow] = useState(false);
    return (
        <header>
        <div className="container">
            <TopNav/>
            <MiddleNav/>
            <LastNav/>
            <button className="btn btn-display" onClick={()=>{setShow(true)}}><i className="fas fa-align-left"></i> Категории</button>
            <button className="btn btn-display" onClick={()=>{setSubCategShow(true)}}><i className="fas fa-align-left"></i> Суб Категории</button>
            <AllCategMob show={show} onClose={()=>{setShow(false)}}/>
            <KitobSubCateg  show={subCategShow} onClose={()=>setSubCategShow(false)}/>
        </div>
        </header>
    )
}

export default Navbar
