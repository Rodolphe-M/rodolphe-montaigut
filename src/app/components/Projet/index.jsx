// src/app/components/Projet/index.jsx
import React from 'react'
import data from '../../utils/data.json'

const Projet = () => {
    // Déstructuration pour extraire la propriété projet
    const { projet } = data

    // Vérifier si le projet existe
    if (!projet) {
        return <div className="unfound">Projet non trouvé</div>
    }

    return (
        <div className="page-projet">
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
                        <a
                            href={projet.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button type="button">Github du projet</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projet
