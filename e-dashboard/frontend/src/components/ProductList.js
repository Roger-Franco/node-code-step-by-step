import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let result = await fetch("http://localhost:5500/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result = await result.json()
    setProducts(result)
  }

  const deleteProduct =  async(id) => {
    // console.log(id);
    let result = await fetch(`http://localhost:5500/product/${id}`, {
      method: "delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result = await result.json()
    if(result) {
      // alert("Product deleted")
      getProducts()
    }
  }

  const searchHandle = async (event) => {
    let key = event.target.value
    if(key) {
      let result = await fetch(`http://localhost:5500/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      result = await result.json()
      if(result) {
        setProducts(result)
      }
    } else {
      getProducts()
    }
  }
  
  return (
    <div className='product-list'>
      <h1>Product list</h1>
      <input type="text" className="search-product-box" placeholder="Search Product" onChange={searchHandle} />
      <ul>
        <li>S. N.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {
       products.length > 0 ? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
          <Link to={`/update/${item._id}`}>Update</Link>
          </li>
        </ul>
      ))  
      : <h1>No result found</h1>
    }
    </div>
  )
}
