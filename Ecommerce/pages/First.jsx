import { useEffect, useState } from "react"
import Product from "../components/Product";
import instance from "../axiosConfig"




function First() {
const [products,setProducts]=useState([])


async function fetchData(){
    const response=await instance.get("/api/product");
    console.log(response.data);
    setProducts(response.data);
}

useEffect(()=>{
    fetchData()
},[])

  return (
<>
{products.length>0 ? (
<div className="products">
    {products.map((product)=>{
        return<Product key={product.id} product={product} />
    })}
</div>


):(
    <div>Loading...</div>
)}

</>
  )
}

export default First