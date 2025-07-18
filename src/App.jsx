import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Cell from './Component/Cell/Cell'
import Dog from './Component/Dog/Dog'
import Electronics from './Component/Electronics/Electronics'
import Automotive from './Component/Automotive/Automotive'
import Jewellery from './Component/Jewelry/Jewellery'
import MedicalEquipment from './Component/MedicalEquipment/MedicalEquipment'
import Pet from './Component/Pet/Pet'
import MusicEquipment from './Component/Music-Equipment/MusicEquipment'
import PowerSports from './Component/Power-Sports/PowerSports'
import Vehical from './Component/Vehical/Vehical'
import Tire from './Component/Tire/Tire'
import Tools from './Component/Tools/Tools'
import ProfessionalTools from './Component/Professional-Tools/ProfessionalTools'
import Recreation from './Component/Recreation/Recreation'
import PersonalProduct from './Component/Personal-Product/PersonalProduct'
import LandscapEquipment from './Component/Landscap-Equipment/LandscapEquipment'
import LivestockEquipment from './Component/Livestock-equipment/LivestockEquipment'
import Home2 from './Component/Home-2/Home2'
import About from './Component/About/About'
import Faqs from './Component/FAQS/Faqs'
import Testimonial from './Component/Testimonial/Testimonial'
import SnowEquipment from './Component/SnowEquipment/SnowEquipment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/automotive' element={<Automotive/>} />
        <Route path='/jewellery' element={<Jewellery/>} />
        <Route path='/medical-equipment' element={<MedicalEquipment/>} />
        <Route path='/cell' element={<Cell/>} />
        <Route path='/dog' element={<Dog/>} />
        <Route path='/electronics' element={<Electronics/>} />
        <Route path='/pet' element={<Pet/>} />
        <Route path='/music-equipment' element={<MusicEquipment/>} />
        <Route path='/power-sports' element={<PowerSports/>} />
        <Route path='/vehical' element={<Vehical/>} />
        <Route path='/tire' element={<Tire/>} />
        <Route path='/tools' element={<Tools/>} />
        <Route path='/professional-tools' element={<ProfessionalTools/>} />
        <Route path='/recreation' element={<Recreation/>} />
        <Route path='/personal-product' element={<PersonalProduct/>} />
        <Route path='/landscap-equipment' element={<LandscapEquipment/>} />
        <Route path='/livestock-equipment' element={<LivestockEquipment/>} />
        <Route path='/home2' element={<Home2/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/snow-equipment' element={<SnowEquipment/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
