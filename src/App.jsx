import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import About from './pages/About'
import Colors from './pages/Colors'
import ColorLayout from './Layout/HomeLayout'
import HomeLayout from './Layout/HomeLayout'
import Dashboard from './pages/Home/Dashboard'
import Reviews from './pages/Home/Reviews'
import HomeColor from './pages/Home/HomeColor'
import Home from './pages/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<HomeLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="review" element={<Reviews />} />
                        <Route path="colors" element={<HomeColor />} />
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="colors" element={<ColorLayout />}>

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App