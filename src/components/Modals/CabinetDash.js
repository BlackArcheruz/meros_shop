import React from 'react'

const CabinetDash = props => {
    if(!props.show){
        return null
    }
    return (
        <div className="cabinet-modal" onClick={props.onClose}>
            <div className="cabinet-modal-content" onClick={e=>e.stopPropagation()}>
                <div className="cabinet-modal-header">
                    <div className="cabinet-modal-title"><h2>Изображение профиля</h2></div>
                </div>
                <div className="cabinet-modal-body">
                    <div className="cabinet-modal-body-content">
                        <label>Загрузить изображение</label>
                        <input type="file" placeholder="Загрузить"/>
                        <label>Или введите ссылку на изображение</label>
                        <input type="text" placeholder="https://example.com/img"/>
                        <p>Вы можете загружать изображения в форматах PNG или JPG. Изображение должно быть не менее 300x300 пикселей и не более 7 МБ.</p>
                        <button className="btn btn-grey" onClick={props.onClose}>Отмена</button>
                        <button className="btn btn-primary" onClick={props.onClose}>Сохранить</button>
                    </div>
                    <div className="cabinet-modal-profile-img">
                        <img src={props.profile} alt="" style={{"borderRadius": "100%","width": "10vw"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CabinetDash
