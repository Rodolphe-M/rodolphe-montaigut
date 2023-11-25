'use client'
import React from 'react'
import Projet from '../../components/Projet/index'
import data from '../../utils/data.json'

function Page({ pageProps }) {
    console.log(pageProps)
    return <Projet {...pageProps} />
}

export default Page
