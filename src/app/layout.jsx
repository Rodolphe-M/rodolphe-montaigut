import './styles/globals.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import localFont from 'next/font/local'

export const metadata = {
    title: 'Rodolphe Portfolio',
    description: 'Portfolio de Rodolphe Montaigut, développeur web',
    authors: [
        { name: 'Rodolphe' },
        { name: 'rodolphe', url: 'https://rodolphe-montaigut.com/' },
    ],
    creator: 'Rodolphe Montaigut',
}

// Font files can be colocated inside of `app`
const myFont = localFont({
    src: './Lexend-Regular.ttf',
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={myFont.className}>
            <Header />
            <main>{children}</main>
            <Footer />
        </html>
    )
}
