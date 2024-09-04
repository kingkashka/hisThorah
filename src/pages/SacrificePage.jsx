import HomeHeader from "../components/HomeHeader"
import SacrificeHeader from "../components/SacrificeHeader"
import SacrificeSmallPage from "../smallpages/SacrificeSmallPage"
import Footer from "../components/Footer"
import { ThemeContext } from "../components/themeContext";
import { useContext } from "react";
import '/src/css/sacrifice.css'

function SacrificePage(){
    const context = useContext(ThemeContext)
    return(
        <div className={`sacrifice--page--${context.color}`}>
        <HomeHeader />
        <SacrificeHeader />
        <SacrificeSmallPage />
        {/* <Footer /> */}
        </div>
    )
}
export default SacrificePage