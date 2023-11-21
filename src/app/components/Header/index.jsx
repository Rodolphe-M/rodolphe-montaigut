import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoNav from '../../../../public/rm-navbar.svg'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link href="/">
                    <Image src={logoNav} alt="logo barre de navigation" />
                </Link>
            </div>
            <div className="navbar__link">
                <Link href="/">Projets</Link>
                <Link href="/">Compétences</Link>
                <Link href="/">À Propos</Link>
                <Link href="/">Contact</Link>
            </div>
        </nav>
    )
}

export default Header
