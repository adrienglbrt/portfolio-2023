import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import localFont from 'next/font/local'

const satoshi = localFont({src: '../../public/fonts/Satoshi-Variable.ttf'})

export default function Layout({ children }) {
    return (
        <div className={`flex min-h-screen flex-col items-stretch justify-between p-2 ${satoshi.className} overflow-hidden`}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}