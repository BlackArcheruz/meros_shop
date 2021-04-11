import {Fragment} from 'react'
import Showcase from './Showcase/Showcase'
import Special from './Special/Special'
import Products from './Products/Products'
import ProductsLast from './Products_last/ProductsLast'
import Section from './Section/Section'
import Deliver from '../Deliver/Deliver'
import Popular from './Popular/Popular'
import Recommend from './Recommend/Recommend'
import Brands from '../Brands/Brands'

const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <Showcase/>
                <Special/>
                <Products/>
                <Section/>
                <ProductsLast/>
            </div>
            <Deliver/>
            <div className="container">
                <Popular/>
                <Recommend/>
                <Brands/>
            </div>
        </Fragment>
    )
}

export default Home
