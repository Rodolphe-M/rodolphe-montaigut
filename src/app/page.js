'use client'
import Home from './pages/Home/page'
import { Lexend, Permanent_Marker } from 'next/font/google'

export const lexand = Lexend({
    subsets: ['latin'],
    display: 'swap',
})

export const permanentMarker = Permanent_Marker({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

export default function Page() {
    return <Home />
}
