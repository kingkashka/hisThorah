import HomeHeader from "../components/HomeHeader"
import DNASmallPage from "../smallpages/DNASmallPage"
import '/src/css/DNA.css';
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";

function DNAPage(){
    const context = useContext(ThemeContext)

    return(
        <div className={`DNABig--Page--${context.color}`}>
        <HomeHeader />
        <DNASmallPage />
        </div>
    )
}
export default DNAPage