import React, { useEffect } from 'react'
import Product from '../features/product/Product'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllProducts} from '../features/product/productSlice'
import { fetchProducts } from '../features/product/productSlice'

const RelativeProduct = () => {
    // const dispatch = useDispatch()
    // useEffect((
    //     dispatch(fetchProducts)
    // ),[dispatch, fetchProducts])
    // const products = useSelector(selectAllProducts)

    // const rederedProducts = products.map(product => (
    //     <Product key={product.id} {...product}/>
    // ))
    // console.log(products)

  return (
    <>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </>
  )
}

export default RelativeProduct