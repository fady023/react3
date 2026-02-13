import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./products.css";

const SingleProduct = () => {

    const [product, setproduct] = useState({});

    const { d } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${d}`).then((res) => setproduct(res.data)).catch((err) => console.log(err));
    });
  

    return (
        <>

            <h3>Single Product Page</h3>
            
            <div className='pro' key={product.id}>

                <img src={product.thumbnail} />
                <h3>{product.title}</h3>
                <h4>{product.description}</h4>

            </div>
        </>
    )
}

export default SingleProduct
