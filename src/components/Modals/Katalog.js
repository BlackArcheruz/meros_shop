import hilol from './img/hilolnashr.svg'

const KatalogModal = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className="katalog-modal" onClick={props.onClose}>
            <div className="katalog-modal-content" onClick={e=>e.stopPropagation()}>
                <div className="katalog-modal-body">
                    <div className="katalog-modal-nav">
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                        <h1>Книги</h1>
                    </div>
                    <div className="katalog-body-texts">
                    <div className="katalog-modal-body-text">
                        <h2>Книги мира</h2>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                    </div>
                    <div className="katalog-modal-body-text">
                        <h2>Книги мира</h2>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                    </div>
                    <div className="katalog-modal-body-text">
                        <h2>Книги мира</h2>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                    </div>
                    <div className="katalog-modal-body-text">
                        <h2>Книги мира</h2>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                        <p>Книги мира</p>
                    </div>
                    </div>
                    <div className="brands-modal">
                        <div className="single-brand-modal">
                            <img src={hilol} alt=""/>
                        </div>
                        <div className="single-brand-modal">
                            <img src={hilol} alt=""/>
                        </div>
                        <div className="single-brand-modal">
                            <img src={hilol} alt=""/>
                        </div>
                        <div className="single-brand-modal">
                            <img src={hilol} alt=""/>
                        </div>
                    </div>
                    <div className="all-categ-modal-close" onClick={props.onClose}><button>&times;</button></div> 
                </div>
            </div>
        </div>
    )
}

export default KatalogModal
