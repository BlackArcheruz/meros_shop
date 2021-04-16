import visibility from '../img/others/visibility.svg'
import star from '../img/others/star.svg'
import trash from '../img/others/trash.svg'

const Product = ({Quran, Stars}) => {
    const style = {
        "border": "none",
        "background": "none",
        "outline": "none"
    }
    return (
        <div className="product-list">
            <div className="first-list">
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            </div>
            <div className="first-list">
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            <div className="product-preview hi-product">
                <div className="img-preview">
                <div className="img">
                <img src={Quran} alt="" className="Quran"/></div>
                <div className="img-icons">
                <button style={style}><img src={visibility} alt="" className="icon-img"/></button>
                <button style={style}><img src={star} alt="" className="icon-img"/></button>
                <button style={style}><img src={trash} alt="" className="icon-img"/></button>
                </div>
                </div>
                <span>-54%</span>
                <p>Книги</p>
                <img src={Stars} alt="" className="stars"/>
                <h2>200 000 сум</h2>
            </div>
            </div>
        </div>
    )
}

export default Product
