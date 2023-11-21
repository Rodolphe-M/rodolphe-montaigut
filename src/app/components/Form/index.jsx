import React, { useEffect } from 'react'

const Form = () => {
    useEffect(() => {
        // Charger les intégrations Tally lorsque le composant est monté
        const loadTallyEmbeds = () => {
            if (typeof Tally !== 'undefined') {
                Tally.loadEmbeds()
            } else {
                document
                    .querySelectorAll('iframe[data-tally-src]:not([src])')
                    .forEach((element) => {
                        element.src = element.dataset.tallySrc
                    })
            }
        }

        loadTallyEmbeds()

        // Si le script Tally n'est pas déjà chargé, chargez-le dynamiquement
        if (
            document.querySelector(
                'script[src="https://tally.so/widgets/embed.js"]',
            ) === null
        ) {
            const script = document.createElement('script')
            script.src = 'https://tally.so/widgets/embed.js'
            script.onload = loadTallyEmbeds
            script.onerror = loadTallyEmbeds
            document.body.appendChild(script)
        }
    }, [])

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `
          <iframe
            data-tally-src="https://tally.so/embed/m6Zd6o?alignLeft=1&hideTitle=1"
            loading="lazy"
            width="100%"
            height="400"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Formulaire de contact"
          ></iframe>
          <script>
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){
              "undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))
            };
            if("undefined"!=typeof Tally)v();
            else if(d.querySelector('script[src="'+w+'"]')==null){
              var s=d.createElement("script");
              s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);
            }
          </script>
        `,
            }}
        />
    )
}

export default Form
