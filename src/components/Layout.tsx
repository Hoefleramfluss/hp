import { ReactNode, useEffect } from 'react'
import HeaderFuturistic from './HeaderFuturistic'
import Footer from './Footer'
import { JsonLd, OrgJsonLd, WebSiteJsonLd } from './StructuredData'

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="bg-cyber-dark min-h-screen text-white">
      <JsonLd data={OrgJsonLd} />
      <JsonLd data={WebSiteJsonLd} />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <HeaderFuturistic />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
