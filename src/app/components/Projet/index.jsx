import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Projet = ({ data }) => {
    // Récupération des paramètres de l'URL (l'ID du projet)
    const router = useRouter()
    const { id } = router.query

    // Recherche du projet correspondant à l'ID dans les données
    const projet = data.find((projet) => projet.id === id)

    // Si aucun projet n'est trouvé avec l'ID redirection vers la page d'erreur
    if (!projet) {
        // Utilisez la méthode push du router pour effectuer la redirection
        router.push('/Error')
        return null // Retournez null pour éviter le rendu de la page actuelle
    }

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
