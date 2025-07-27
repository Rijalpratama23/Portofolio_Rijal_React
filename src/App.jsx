import NavbarPage from "./Components/Pages/NavbarPage"
import HeroPage from "./Components/Pages/HeroPage"
import AboutPage from "./Components/Pages/AboutPage"
import SkillsPage from "./Components/Pages/SkillsPage"
import Polio from "./Components/Fragments/Polio"
import ContactPage from "./Components/Pages/ContactPage"
import FooterPage from "./Components/Pages/FooterPage"

export default function App() {
    return(
        <div className="scroll-smooth">
            <NavbarPage />
            <HeroPage />
            <AboutPage />
            <SkillsPage />
            <Polio />
            <ContactPage />
            <FooterPage />
        </div>
    )
}