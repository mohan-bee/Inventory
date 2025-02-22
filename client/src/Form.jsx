import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post('https://inventory-m2qs.onrender.com/create', {name, description: desc, price, quantity})
            console.log(res.data.message)
            navigate('/forms')
        } catch (error) {
            console.error("Error: ", error.message)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Description
                <input type="text" onChange={(e) => setDesc(e.target.value)}/>
            </label>
            <label>
                Price
                <input type="number" onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <label>
                Quantity
                <input type="number" onChange={(e) => setQuantity(e.target.value)}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form