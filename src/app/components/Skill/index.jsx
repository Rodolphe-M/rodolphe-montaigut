import React from 'react'
import Image from 'next/image'

const Skill = ({ logoSrc, altText, text }) => {
    return (
        <div>
            <Image src={logoSrc} alt={altText} />
            <p>{text}</p>
        </div>
    )
}

export default Skill
