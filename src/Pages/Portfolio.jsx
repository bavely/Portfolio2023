import React, {useEffect, useState} from 'react'
import Introduction from '../Components/Portfolio/Introduction'
import Skills from '../Components/Portfolio/Skills'
import Works from '../Components/Portfolio/Works'
import ContactMe from '../Components/Portfolio/ContactMe'
import ContactInfo from '../Components/Portfolio/ContactInfo'
function Portfolio() {
  return (
    
    <div className="container-fluid">
      <Introduction />
      <Skills />
      <Works />
      <ContactMe />
      <ContactInfo />
      <div className="footer row">
      <div className='text-center pt-3 pb-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Bavely Tawfik
      </div>
      </div>
    </div>
  )
}

export default Portfolio