import React from 'react'
import Image from 'next/image'

const Card = ({ title, image }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <Image src={image} alt="Photo du projet" />
        </div>
    )
}

export default Card
