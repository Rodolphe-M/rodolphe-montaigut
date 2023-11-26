import React from 'react'
import Image from 'next/image'
import Skill from '../Skill'
import Form from '../Form'
import Card from '../Card'
import logoHome from '../../../../public/logo-home.svg'
import photoHome from '../../../../public/photo.jpg'
import photoAbout from '../../../../public/photo-about.jpg'
import htmlLogo from '../../../../public/html5.svg'
import cssLogo from '../../../../public/css.svg'
import jsLogo from '../../../../public/js.svg'
import reactLogo from '../../../../public/react.svg'
import nextLogo from '../../../../public/next.svg'
import seoLogo from '../../../../public/seo.png'
import agileLogo from '../../../../public/agile.png'
import expressLogo from '../../../../public/express.svg'
import nodeLogo from '../../../../public/node.svg'
import sassLogo from '../../../../public/sass.svg'
import perfLogo from '../../../../public/perf.png'
import learnLogo from '../../../../public/learn.png'

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
                    <Image
                        src={photoHome}
                        alt="photo de Rodolphe Montaigut"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
            <div id="anker-projet" className="projet-container">
                <h2>Projets</h2>
                <Card data={data} />
            </div>
            <div id="anker-skill" className="skill-container">
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
                                    logoSrc={perfLogo}
                                    altText="logo performance"
                                />
                                <Skill
                                    logoSrc={learnLogo}
                                    altText="logo apprendre"
                                />
                                <Skill
                                    logoSrc={agileLogo}
                                    altText="logo Agile"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="anker-about" className="about-container">
                <h2>À propos</h2>
                <div className="about">
                    <div className="about__img">
                        <Image
                            src={photoAbout}
                            alt="photo de Rodolphe Montaigut"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="about__text">
                        <p>
                            Salut, je suis Rodolphe, un développeur web
                            front-end junior, basé sur Toulon.
                        </p>
                        <p>
                            J'ai entrepris une reconversion à travers le
                            parcours d'OpenClassrooms. Actuellement, je suis à
                            la recherche d'une opportunité au sein d'une
                            entreprise dynamique où je pourrais allier ma
                            créativité à ma passion pour la technologie. Mon
                            objectif est de contribuer à la création de produits
                            web innovants tout en continuant à perfectionner mes
                            compétences au sein d'une équipe collaborative.
                        </p>
                        <p>
                            À côté de cela, j'apprécie tout particulièrement le
                            sport et les voyages. Si vous me cherchez en dehors
                            du travail, il y a de fortes chances pour que je
                            sois en mer, en train de faire du bateau ou de
                            pratiquer le kite, le surf, ou le wing-foil.
                        </p>
                        <p>
                            Pour toutes questions, propositions de projets.
                            N'hésitez pas à me contacter à l'aide du formulaire
                            en bas de la page.
                        </p>
                    </div>
                </div>
            </div>
            <div id="anker-form" className="form-container">
                <div className="form">
                    <h2>Formulaire de contact</h2>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Home
