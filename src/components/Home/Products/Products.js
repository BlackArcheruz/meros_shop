import FirstAd from './img/Ads/First.svg'
import Quran from './img/Product/Quran.png'
// import alQuran from './img/Product/alQuran.svg'
// import Braslet from './img/Product/Braslet.svg'
// import Brelok1 from './img/Product/Brelok1.svg'
// import Brelok2 from './img/Product/Brelok2.svg'
// import Gift from './img/Product/Gift.png'
// import Oblojka from './img/Product/Oblojka.png'
// import Yasin from './img/Product/Yasin.png'
import Product from './Product/Product'
import Stars from './img/Product/Stars.svg'
// import { useState } from 'react'

const Products = () => {
    // const [products, setProducts] = useState([
    //     {
    //         id: 1,
    //         name: "Книги Коран",
    //         category: "Книги",
    //         old_cost: "220 000 сум",
    //         new_cost: "120 000 сум",
    //         rate: 4,
    //         sale_percent: 54,
    //         image: Quran
    //     },
    //     {
    //         id: 2,
    //         name: "Золотая Сура Ясин Аль Коран чтение",
    //         category: "Диски",
    //         old_cost: null,
    //         new_cost: "140 000 сум",
    //         rate: 4,
    //         sale_percent: null,
    //         image: Yasin
    //     },
    //     {
    //         id: 3,
    //         name: "Equantu surah al quran mp3",
    //         category: "Диски",
    //         old_cost: "260 000 сум",
    //         new_cost: "130 000 сум",
    //         rate: 4,
    //         sale_percent: 70,
    //         image: alQuran
    //     },
    //     {
    //         id: 4,
    //         name: "Браслет Kokette если вещи не подошли.",
    //         category: "Атрибутика",
    //         old_cost: null,
    //         new_cost: "95 000 сум",
    //         rate: 4,
    //         sale_percent: null,
    //         image: Braslet
    //     },
    //     {
    //         id: 5,
    //         name: "Обложка для паспорта Odyssey",
    //         category: "Атрибутика",
    //         old_cost: null,
    //         new_cost: "30 000 сум",
    //         rate: 4,
    //         sale_percent: null,
    //         image: Oblojka
    //     },
    //     {
    //         id: 6,
    //         name: "Подарочный набор с Кораном",
    //         category: "Книги",
    //         old_cost: "280 000 сум",
    //         new_cost: "140 000 сум",
    //         rate: 4,
    //         sale_percent: 50,
    //         image: Gift
    //     },
    //     {
    //         id: 7,
    //         name: "Брелок для ключей",
    //         category: "Канцтовары",
    //         old_cost: null,
    //         new_cost: "80 000 сум",
    //         rate: 4,
    //         sale_percent: null,
    //         image: Brelok1
    //     },
    //     {
    //         id: 8,
    //         name: "Брелок для ключей",
    //         category: "Канцтовары",
    //         old_cost: "80 000 сум",
    //         new_cost: "50 000 сум",
    //         rate: 4,
    //         sale_percent: 5,
    //         image: Brelok2
    //     }
    //     ]);
    return (
        <>
        <div className="Special1">
            <h3>Лучшие предложения!</h3>
        </div>
        <div className="product-special">
        <div className="left-ad">
            <img src={FirstAd} alt=""/>
        </div>
        <Product Quran={Quran} Stars={Stars}/>
        </div>
        </>
    )
}

export default Products
