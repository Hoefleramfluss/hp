import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Voicebot from './pages/Loesungen/Voicebot'
import Gastro from './pages/Branchen/Gastro'

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loesungen/voicebot" element={<Voicebot />} />
      <Route path="/branchen/gastro" element={<Gastro />} />
    </Routes>
  </Layout>
)

export default App
