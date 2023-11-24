'use client'
import React, { useParams } from 'react'
import Link from 'next/link'
import data from '../../utils/data.json'

// Définition du composant "Projet"
const Projet = () => {
    const { id } = useParams()
    // Recherche du logement correspondant à l'ID dans les données
    const projet = data.find((projet) => projet.id === id)

    return (
        <div className="container-projet">
            <div className="projet">
                <div className="projet__title">
                    <h2>{projet.title}</h2>
                    <div className="projet__comp">
                        <ul>
                            {projet.competences.map((competence, index) => (
                                <li key={index}>{competence}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="projet-button">
                        {/* Utilisez Link pour naviguer vers la page GitHub */}
                        <Link href={projet.lien}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button type="button">Github du projet</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projet
