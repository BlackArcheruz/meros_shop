const OtzivModal = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className="otziv-modal" onClick={props.onClose}>
            <div className="otziv-modal-content" onClick={e=>e.stopPropagation()}>
                <div className="otziv-modal-header">
                    <div className="otziv-modal-title"><h2>Ваша Оценка:</h2></div><div className="all-categ-modal-close" onClick={props.onClose}><button>&times;</button></div>
                </div>
                <div className="otziv-modal-body">
                        <label>Достоинства</label>
                        <input type="text" placeholder="Что вам понравилось"/>
                        <label>Комментарий</label>
                        <textarea id="" cols="30" rows="10" placeholder="Другие впечатления о модели"></textarea>
                        <button className="btn btn-primary" onClick={props.onClose}>Оставить Отзив</button>
                </div>
            </div>
        </div>
    )
}

export default OtzivModal
