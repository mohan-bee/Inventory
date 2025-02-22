    import axios from 'axios'
    import React, { useEffect, useState } from 'react'
    import './App.css'
    const Display = () => {
        const [forms, setForms] = useState([])

        const fetchForms = async () => {
            try {
                let res = await axios.get(`https://inventory-m2qs.onrender.com/forms`)
                setForms(res.data.forms)
                // console.log()
            } catch (error) {
                console.log(error.message)
            }
        }
        useEffect(()=> {
            fetchForms()
        },[])
    return (
        <div className='grid'>
            {forms && forms.map(form => (
                <div className='card' key={form._id}>
                    <p>Name: {form.name}</p>
                    <p>Description: {form.description}</p>
                    <p>Price: {form.price}</p>
                    <p>Quantity: {form.quantity}</p>
                </div>
            ))}
        </div>
    )
    }

    export default Display