import HomeHeader from "../components/HomeHeader"
import Leveticus11SmallPage from "../smallpages/Leviticus11SmallPage"
import Footer from "../components/Footer"
import { ThemeContext } from "../components/themeContext";
import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import "/src/css/Kosher.css";

function Leviticus11Page(){
    const context = useContext(ThemeContext)
    return(
        <>
        <HomeHeader />
        <Leveticus11SmallPage />
        </>
    )
}
export default Leviticus11Page