import React from 'react'
import { Outlet } from 'react-router-dom'

// Pages
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function RootLoyout() {
  return (
    <>
        <header><Header/></header>
        <main><Outlet/></main>
        <footer><Footer/></footer>
    </>
  )
}

export default RootLoyout