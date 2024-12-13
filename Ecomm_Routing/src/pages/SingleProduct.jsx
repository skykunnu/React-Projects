import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

function SingleProduct() {
  const {id}=useParams(); // to get the dynamic part of the URL. 
  const [product,setProduct]=useState({});


useEffect(()=>{
  fetchData(id);
},[id]);

async function fetchData(id){
  const response=await axios.get("https://fakestoreapi.com/products/"+id);
  setProduct(response.data);
}



  return (
    <>
    {Object.keys(product).length > 0 ? (
      <div className="singleProduct">
      <div className="left">
        <img src={product.image} alt="Product Image" />
      </div>
      <div className="right">
        <h2>{product.title}</h2>
        <p className="category">Category:- {product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <Link className="addToCart">Add To Cart</Link>
      </div>
    </div>
    ):(
      <div>Loading...</div>
    )} 
    </>
  )
}

export default SingleProduct