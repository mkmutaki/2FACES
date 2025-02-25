import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Newsletterbox from '../components/Newsletterbox'
import FAQ from '../components/FAQ'

const home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Newsletterbox />
      <FAQ />
    </div>
  )
}

export default home
