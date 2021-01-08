import './styles.css';
import { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { OrderLocationData, Product } from './types'
import OrderLocation from './OrderLocation';

function Orders(){
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setorderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setorderLocation(location)}/>
        </div>
    )
}

export default Orders;