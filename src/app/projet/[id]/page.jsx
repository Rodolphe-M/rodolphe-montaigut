'use client'
import React from 'react'
import Image from 'next/image'
import data from '../../utils/data.json'

function Page({ params }) {
    const id = params.id

    // Trouver l'objet correspondant à l'ID dans le fichier JSON
    const projetData = data.find((item) => item.id === id)

    return (
        <div className="page-projet">
            <div className="projet">
                <h2>{projetData.title}</h2>
                <Image
                    className="projet__img"
                    src={projetData.cover}
                    alt={projetData.title}
                    width={800}
                    height={500}
                    priority={true}
                />
                <div className="projet-wrapper">
                    <div className="projet__description">
                        <h3>Description du projet</h3>
                        <p>{projetData.description}</p>
                    </div>
                    <div className="projet__comp">
                        <h3>Compétences ciblées</h3>
                        <ul>
                            {projetData.competences.map((competence, index) => (
                                <li key={index}>{competence}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="projet__button">
                    {/* Utilisez Link pour naviguer vers la page GitHub */}
                    <a
                        href={projetData.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="button">Github du projet</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Page
