import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Définition du composant "Card" qui prend un prop "data"
const Card = ({ data }) => {
    return (
        <div className="cards-container">
            {/* On parcourt data pour extraire les projets */}
            {data.map((projet) => (
                // Création d'une clé unique (ici, l'ID du projet)
                <div key={projet.id} className="cards-wrapper">
                    {/* Lien vers la page détaillée du projet */}
                    <Link href="/projet/[id]" as={`/projet/${projet.id}`}>
                        <div className="cards">
                            <Image
                                className="cards__img"
                                src={projet.cover}
                                alt={projet.title}
                                width={500}
                                height={500}
                            />
                            <h4 className="cards__title">{projet.title}</h4>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Card
