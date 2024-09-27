import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Restaurants from './container/Restaurants/Restaurant'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/LodingPage/Hero';
import RestaurantBranch from './components/LodingPage/RestaurantBranch';
import CustmerReviewCard from './components/LodingPage/CustmerReviewCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <RestaurantBranch/>
     <CustmerReviewCard/>
     <Footer/>
     {/* <Restaurants/> */}
    </>
  )
}

export default App
