import React from 'react'
import Image from 'next/image'

const SocialLink = ({ link, logoSrc, altText }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={logoSrc} alt={altText} />
        </a>
    )
}

export default SocialLink
