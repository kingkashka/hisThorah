import TheNameSmallPage from "../smallpages/TheNameSmallPage";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import Footer from '../components/Footer';
function TheName()
{
    const context = useContext(ThemeContext)
    return(
        <>
        <TheNameSmallPage />
        <footer/>
        </>
    )
}
export default TheName;