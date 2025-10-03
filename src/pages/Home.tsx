import SeoHead from '../components/SeoHead'
import HeroFuturistic from '../components/HeroFuturistic'
import Trust from '../components/Trust'
import Showcases from '../components/Showcases'
import FeaturesFuturistic from '../components/FeaturesFuturistic'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import { absUrl } from '../lib/seo'

const Home = () => (
  <>
    <SeoHead
      title="VoXon.ai – Österreichische Voicebots & KI-Voice-Agents (DSGVO)"
      description="Telefon-Agenten, die Termine fixieren, Fragen beantworten & No-Shows senken. DSGVO-konform, EU-Server, in Tagen einsatzbereit."
      url={absUrl('/')}
      image={absUrl('/og/hero.png')}
      canonical={absUrl('/')}
      lang="de-AT"
    />
    <HeroFuturistic />
    <Trust />
    <Showcases />
    <FeaturesFuturistic />
    <Pricing />
    <CTA />
  </>
)

export default Home
