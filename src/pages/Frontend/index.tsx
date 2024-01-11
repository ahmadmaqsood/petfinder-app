import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

export default function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
