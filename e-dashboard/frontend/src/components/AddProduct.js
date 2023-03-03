import React, {useState} from 'react'

export const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')

  const addProduct = async () => {
    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem('user'))._id
    console.log(userId);
    let result = await fetch("http://localhost:5500/add-product", {
      method: 'post',
      body: JSON.stringify({name, price, category, company}),
      headers: {
        'Content-Type':'application/json'
      }
    })
    result = await result.json()
    console.log(result);
  }

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input className='inputBox'  type="text" placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input className='inputBox'  type="text" placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <input className='inputBox'  type="text" placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
      <input className='inputBox'  type="text" placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)}/>
    <button onClick={addProduct} className='appButton'>Add Product</button>
    </div>
  )
}
