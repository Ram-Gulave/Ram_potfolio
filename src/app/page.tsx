import About from '@/components/HomeComponents/About'
import ContactSection from '@/components/HomeComponents/ContactSection'
import ExperienceCard from '@/components/HomeComponents/ExperienceCard'
import ExperienceSection from '@/components/HomeComponents/ExperienceSection'
import Footer from '@/components/HomeComponents/Footer'
import Hero from '@/components/HomeComponents/Hero'
import PositionsSection from '@/components/HomeComponents/PositionsSection'
import SkillsSection from '@/components/HomeComponents/SkillsSection'
import Technologies from '@/components/HomeComponents/Technologies'
import MainNavbar from '@/components/NavbarComponents/MainNabar'
import React from 'react'

function page() {
  return (
    <div>
      <MainNavbar />
      <Hero />
      <About />
      <ExperienceCard />
      <Technologies />
      <ExperienceSection />
      <PositionsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page