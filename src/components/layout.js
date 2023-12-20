import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import localFont from 'next/font/local'

const satoshi = localFont({
    src: '../../public/fonts/Satoshi-Variable.ttf',
    display: 'swap',
    variable: '--font-satoshi'
})

const fraktion = localFont({
    src: '../../public/fonts/PPFraktionMono-Regular.ttf',
    display: 'swap',
    variable: '--font-fraktion'
})

export default function Layout({ children }) {
    return (
        <div className={`flex min-h-screen flex-col items-stretch justify-between p-2 ${satoshi.variable} ${fraktion.variable} font-sans antialiased`}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}