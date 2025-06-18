import { useState } from 'react'
import './App.css'
import HeroSection from './Component/HeroSection';
import AboutPrayas from './Component/AboutPrayas';
import HowToUseQRSection from './Component/HowToUseQRSection';
import RegistrationForm from './Component/RegistrationForm';
import QRScanner from './Component/QRScanner';
import Footer from './Component/Footer';
// import QRGenerator from './Component/QRGenerator';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div >
<HeroSection />
<AboutPrayas/>
<HowToUseQRSection/>
<RegistrationForm/>


<QRScanner/>
<Footer/>
  </div>
  )
}

export default App
