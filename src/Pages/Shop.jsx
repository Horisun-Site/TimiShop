import React from 'react'
import Navbar from '../Component/Navbar'
import Nav from '../Component/Nav'
import Feed from '../Component/Feed'
import Bottom from '../Component/Bottom'
import Last from '../Component/Last'

const Shop = () => {
  return (
    <div>
      <Nav/>
      <Navbar/>
      <Feed/>
      <Last/>
      <Bottom/>
    </div>
  )
}

export default Shop