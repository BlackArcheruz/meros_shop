import React, { useState } from 'react'

const MyDatas = () => {
    const [datas, setDatas] = useState([
        {
            id: 1,
            title: "Meros Дисконт %",
            text: "10% - 25%",
            title_class: "primary-text",
            text_class: "grey-text"
        },
        {
            id: 2,
            title: "Meros Card",
            text: "Кэшбэк 5%",
            title_class: "dark-text",
            text_class: "grey-text"
        },
        {
            id:3,
            title: "Баллы",
            text: "15 Баллов",
            title_class: "red-text",
            text_class: "grey-text"
        }
    ])
    return (
        <div className="my-data">
            <h2>Мои данные</h2>
            <div className="my-datas">
                {datas.map((data)=>(
                    <div className="my-data-card" key={data.id}>
                        <h2 className={data.title_class}>{data.title}</h2>
                        <p className={data.text_class}>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyDatas
