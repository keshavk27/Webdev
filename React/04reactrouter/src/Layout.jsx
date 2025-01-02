import React from 'react'
import Header from './components/02header/header'
import Footer from './components/01Footer/footer'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <>
           <Header/>
           <Outlet/>
           <Footer/> 
        </>
    )
}

export default Layout
