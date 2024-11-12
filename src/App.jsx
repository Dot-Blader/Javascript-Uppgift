import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Logos from "./components/Logos"
import AppFeatures from "./components/AppFeatures"
import Slider from "./components/Slider"
import FeaturesGrid from "./components/FeaturesGrid"
import Testimonials from "./components/Testimonials"
import Faq from "./components/FAQ"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"
import NavBar from './components/NavBar'
import ContactHero from './components/ContactHero'
import ContactMap from './components/ContactMap'

function App() {


    return (
        <BrowserRouter>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="src/styles.css"></link>
            <script src="/src/components/FaqScript.js"></script>
            
            <NavBar/>

            <main>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Header />
                            <Logos />
                            <AppFeatures />
                            <Slider />
                            <FeaturesGrid />
                            <Testimonials />
                            <Faq />
                            <Subscribe />
                        </div>}>
                    </Route>
                    <Route path="/Contact" element={
                        <div>
                            <ContactHero />
                            <ContactMap />
                        </div>}>
                    </Route>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
export default App