import '@/styles/globals.css'
import Layout from '@/components/layout'
import LenisScroll from '@/components/lenisScroll'

export default function App({ Component, pageProps }) {
  return (
    <LenisScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </LenisScroll>
  )
}
