import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setTitle("")
        setPrice(0)
        setDescription("")

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Form