import '@/styles/globals.css'
import Layout from '@/components/layout'
import LenisScroll from '@/components/lenisScroll'
import { AnimatePresence, motion, Spring } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = '#181820';

  return (
    <LenisScroll>
        <Layout>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div key={router.route}>
            <motion.div
              style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  width: "100vw",
                  zIndex: 1000,
                  bottom: 0,
                }}
                transition={transitionSpringPhysics}
                animate={{ height: "0vh" }}
                exit={{ height: "100vh" }}
            />
            <motion.div
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  width: "100vw",
                  zIndex: 1000,
                  top: 0,
                }}
                transition={transitionSpringPhysics}
                initial={{ height: "100vh" }}
                animate={{ height: "0vh", transition: { delay: 0.2 } }}
              />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
    </LenisScroll>
  )
}
