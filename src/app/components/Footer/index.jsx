import React from 'react'
import SocialLink from '../../components/SocialLink'
import githubLogo from '../../../../public/github.svg'
import linkedinLogo from '../../../../public/linkedin.svg'
import whatsappLogo from '../../../../public/whatsapp.svg'
import twitterlogo from '../../../../public/twitter.svg'
import instagramlogo from '../../../../public/instagram.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <SocialLink
                    link="https://github.com/Rodolphe-M"
                    logoSrc={githubLogo}
                    altText="Lien Github"
                />
                <SocialLink
                    link="https://www.linkedin.com/in/rodolphe-montaigut-6629b1262/"
                    logoSrc={linkedinLogo}
                    altText="Lien Linkedin"
                />
                <SocialLink
                    link="https://wa.me/+33634654071"
                    logoSrc={whatsappLogo}
                    altText="Lien Whatsapp"
                />
                <SocialLink
                    link="https://twitter.com/Rodolphe_Mtg"
                    logoSrc={twitterlogo}
                    altText="Lien Twitter"
                />
                <SocialLink
                    link="https://www.instagram.com/rodolphe_mtg/"
                    logoSrc={instagramlogo}
                    altText="Lien Instagram"
                />
            </div>
            <p>Rodolphe Montaigut - Since 2023</p>
        </div>
    )
}

export default Footer
