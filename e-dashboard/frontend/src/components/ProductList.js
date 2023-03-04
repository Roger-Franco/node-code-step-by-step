import React, {useState, useEffect} from 'react'

export const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let result = await fetch("http://localhost:5500/products")
    result = await result.json()
    setProducts(result)
  }

  const deleteProduct =  async(id) => {
    // console.log(id);
    let result = await fetch(`http://localhost:5500/product/${id}`, {
      method: "delete"
    })
    result = await result.json()
    if(result) {
      // alert("Product deleted")
      getProducts()
    }
  }
  
  return (
    <div className='product-list'>
      <h1>Product list</h1>
      <ul>
        <li>S. N.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li><button onClick={() => deleteProduct(item._id)}>Delete</button></li>
        </ul>
      ))}
    </div>
  )
}
