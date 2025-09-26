import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import MedicalAgent from './pages/MedicalAgent'
import Tony from './pages/Tony'
import Werkstatt from './pages/Werkstatt'
import Ticketing from './pages/Ticketing'
import CustomAgents from './pages/CustomAgents'
import Pricing from './pages/Pricing'
import Demos from './pages/Demos'
import RootLayout from './components/RootLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}> 
          <Route index element={<Home />} />
          <Route path="/produkte" element={<Products />} />
          <Route path="/medical-agent" element={<MedicalAgent />} />
          <Route path="/tony" element={<Tony />} />
          <Route path="/werkstatt-manager" element={<Werkstatt />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/custom-agents" element={<CustomAgents />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
