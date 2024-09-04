import { ThemeContext } from "../components/themeContext"
import { useContext } from "react"
function SacrificeCard(props){
    const {title, image, description} = props
    const context = useContext(ThemeContext)
    return(
        <div className={`sacrifice--card--${context.color}`}>
        <h1>{title}</h1>
        <img src={image} alt="" />
        <p>{description}</p>
        </div>
    )
}
export default SacrificeCard