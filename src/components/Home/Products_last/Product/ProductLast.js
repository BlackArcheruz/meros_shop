import visibility from '../../Products/img/others/visibility.svg'
import star from '../../Products/img/others/star.svg'
import trash from '../../Products/img/others/trash.svg'

const ProductLast = ({Hadis, Stars}) => {
    const style = {
        "border": "none",
        "background": "none",
        "outline": "none"
    }
    return (
        <div className="product-list1">
            <div className="first-list">
            <div className="product-preview product-preview1">
                                <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt="" />
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview product-preview1">
            <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt="" />
                </div>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h3>200 000 сум</h3>
            </div>
            <div className="product-preview product-preview1">
            <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt="" />
                </div>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h3>200 000 сум</h3>
            </div>
            <div className="product-preview product-preview1">
            <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt="" />
                </div>
                <span>-70%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            </div>
            <div className="first-list">
            <div className="product-preview product-preview1">
            <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt=""/>
                </div>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h3>200 000 сум</h3>
            </div>
            <div className="product-preview product-preview1">
            <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt=""/>
                </div>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h3>200 000 сум</h3>
            </div>
            <div className="product-preview product-preview1">
            <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt=""/>
                </div>
                <span>-5%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview product-preview1">
            <div className="img-preview">
                    <div className="img-icons">
                    <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                <img src={Hadis} alt=""/>
                </div>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h3>200 000 сум</h3>
            </div>
            </div>
        </div>
    )
}

export default ProductLast
