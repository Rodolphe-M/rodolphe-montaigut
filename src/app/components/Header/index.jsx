import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoNav from '../../../../public/rm-navbar.svg'

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__logo">
                    <Link href="/">
                        <Image src={logoNav} alt="logo barre de navigation" />
                    </Link>
                </div>
                <div className="navbar__link">
                    <Link href="/#anker-projet">Projets</Link>
                    <Link href="/#anker-skill">Compétences</Link>
                    <Link href="/#anker-about">À Propos</Link>
                    <Link href="/#anker-form">Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
