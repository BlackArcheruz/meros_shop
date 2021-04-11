import {Fragment, useState} from 'react'
import hilol from './img/hilol.svg'
import logo from './img/logo.svg'
import koska from './img/koska.svg'
import sharq from './img/sharq.svg'
import alfajr from './img/alfajr.svg'
import alhrameen from './img/alhrameen.svg'
import prev from './img/prev.svg'
import next from './img/next.svg'

const Brands = () => {
    const [images, setImages] = useState(
        [
            {
                id: 1,
                image_src: hilol
            },
            {
                id: 2,
                image_src: logo
            },
            {
                id: 3,
                image_src: sharq
            },
            {
                id: 4,
                image_src: alhrameen
            },
            {
                id: 5,
                image_src: alfajr
            },
            {
                id: 6,
                image_src: koska
            },
        ]
    ) 
    return (
        <Fragment>
            <div className="Special2">
            <h3>Бренды</h3>
            <div className="button-popular">
            <button id="prev-btn"><img src={prev} alt=""/></button>
            <button id="next-btn"><img src={next} alt=""/></button>
            </div>
            </div>
            <hr/>
            <div className="brands">
            {
                images.map((image)=>(
                    <div className="single-brand" key={image.id}>
                        <img src={image.image_src} alt="" />
                    </div>
                ))
            }
            </div>
        </Fragment>
    )
}

export default Brands
