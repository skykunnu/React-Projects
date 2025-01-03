
function Product({product}) {
  return (
    <>
    <div className="product">
      <img src={product.url} alt="" />
      <h3>{product.name}</h3>
    </div>
    
    </>
  )
}

export default Product