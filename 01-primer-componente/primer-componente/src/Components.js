import React from 'react';

const Title = (props) => {
    return (
        <h2 className="mb-4">{props.text}</h2>
    )
}

const Body = () => {
    return (
        <p className="mb-5">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising
                in the city
                or on your next road trip.</p>
    )
}

const Button = () => {
    return (
        <a className="card-button mb-4 py-2 px-4" href="#">Learn More</a>
    )
}

export { Title, Body, Button }