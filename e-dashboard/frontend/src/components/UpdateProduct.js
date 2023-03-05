import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';


export const UpdateProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')
  const params = useParams()
  const navigate = useNavigate()
  

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    console.log(params, 'params');
    let result = await fetch(`http://localhost:5500/product/${params.id}`)
    result = await result.json()
    // console.log(result);
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }
  

  const UpdateProduct = async () => {
    let result = await fetch(`http://localhost:5500/product/${params.id}`, {
      method: 'Put',
      body: JSON.stringify({name, price, category, company}),
      headers: {
        'Content-Type':'application/json'
      }
    })
    result = await result.json()
    if(result) {
      navigate('/')
    }
    // console.log(result);
  }

  return (
    <div className="product">
      <h1>Edit Product</h1>
      <input className='inputBox'  type="text" placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input className='inputBox'  type="text" placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <input className='inputBox'  type="text" placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
      <input className='inputBox'  type="text" placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)}/>
    <button onClick={UpdateProduct} className='appButton'>Update Product</button>
    </div>
  )
}
