import React from 'react'
import Image from 'next/image'
import logoHome from '../../../../public/logo-home.svg'
import photoHome from '../../../../public/photo.jpg'
import Skill from '../../components/Skill'

const Home = () => {
    return (
        <main>
            <div className="home">
                <div className="intro">
                    <div className="intro__text">
                        <Image
                            src={logoHome}
                            alt="image texte Rodolphe Montaigut"
                        />
                    </div>
                    <div className="intro__photo">
                        <Image
                            src={photoHome}
                            alt="photo de Rodolphe Montaigut"
                        />
                    </div>
                </div>
                <div className="skill">
                    <Skill />
                </div>
            </div>
        </main>
    )
}

export default Home
