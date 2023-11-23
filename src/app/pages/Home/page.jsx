import React from 'react'
import Image from 'next/image'
import Skill from '../../components/Skill'
import Form from '../../components/Form'
import Card from '../../components/Card'
import logoHome from '../../../../public/logo-home.svg'
import photoHome from '../../../../public/photo.jpg'
import htmlLogo from '../../../../public/html5.svg'
import cssLogo from '../../../../public/css.svg'
import jsLogo from '../../../../public/js.svg'
import reactLogo from '../../../../public/react.svg'
import nextLogo from '../../../../public/next.svg'
import seoLogo from '../../../../public/seo.svg'
import agileLogo from '../../../../public/agile.png'
import expressLogo from '../../../../public/express.svg'
import nodeLogo from '../../../../public/node.svg'
import sassLogo from '../../../../public/sass.svg'
import data from '../../utils/data.json'

const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <div className="intro__text">
                    <Image
                        src={logoHome}
                        alt="image texte Rodolphe Montaigut"
                    />
                </div>
                <div className="intro__photo">
                    <Image src={photoHome} alt="photo de Rodolphe Montaigut" />
                </div>
            </div>
            <div className="projet-container">
                <h2>Projets</h2>
                <Card data={data} />
            </div>
            <div className="skill-container">
                <div className="skill">
                    <div className="skill__title">
                        <h2>Compétences</h2>
                    </div>
                    <div className="card__skill">
                        <div className="skill__tech">
                            <h3>Technologies</h3>
                            <div className="skill__tech__logo">
                                <Skill logoSrc={htmlLogo} altText="logo html" />
                                <Skill logoSrc={cssLogo} altText="logo CSS" />
                                <Skill logoSrc={jsLogo} altText="JS html" />
                                <Skill logoSrc={nodeLogo} altText="logo Node" />
                            </div>
                        </div>
                        <div className="skill__framework">
                            <h3>Frameworks</h3>
                            <div className="skill__framework__logo">
                                <Skill
                                    logoSrc={reactLogo}
                                    altText="logo React"
                                />
                                <Skill logoSrc={nextLogo} altText="logo Next" />
                                <Skill logoSrc={sassLogo} altText="logo Sass" />
                                <Skill
                                    logoSrc={expressLogo}
                                    altText="logo Express"
                                />
                            </div>
                        </div>
                        <div className="skill__soft">
                            <h3>Soft Skills</h3>
                            <div className="skill__soft__logo">
                                <Skill logoSrc={seoLogo} altText="logo SEO" />
                                <Skill
                                    logoSrc={agileLogo}
                                    altText="logo Agile"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <div className="form">
                    <h2>Formulaire de contact</h2>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Home
