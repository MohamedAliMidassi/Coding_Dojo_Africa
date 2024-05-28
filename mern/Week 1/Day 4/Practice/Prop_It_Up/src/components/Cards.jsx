import React from 'react'

const Card = (props) => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {props.age}</h3>
            <h3>Hair Color: {props.hairColor}</h3>

        </div>
    )
}
export default Card;