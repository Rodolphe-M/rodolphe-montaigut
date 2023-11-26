import './styles/globals.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import { Lexend, Kalam } from 'next/font/google'

export const metadata = {
    title: 'Rodolphe Portfolio',
    description: 'Portfolio de Rodolphe Montaigut, développeur web',
    authors: [
        { name: 'Rodolphe' },
        { name: 'rodolphe', url: 'https://rodolphe-montaigut.com/' },
    ],
    creator: 'Rodolphe Montaigut',
}

export const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
})

export const kalam = Kalam({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <Header />
            <main>{children}</main>
            <Footer />
        </html>
    )
}
