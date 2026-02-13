import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./products.css";
import { Link } from 'react-router-dom';

const Products = () => {

    const [products,setpro] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>setpro(res.data.products)).catch((err)=>console.log(err));
    })
  return (

    <div className='pros'>

    {products.map((el)=>(
        <div className='pro' key={el.id}>
            <img src={el.thumbnail}/>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <Link to={`${el.id}`}> Show more ...  </Link>
        </div>
    ))}
      
    </div>
  )
}

export default Products
