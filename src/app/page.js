'use client'
import Home from './pages/Home/page'
import { Lexend, Kalam } from 'next/font/google'

export const lexand = Lexend({
    subsets: ['latin'],
    display: 'swap',
})

export const kalam = Kalam({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

export default function Page() {
    return <Home />
}
