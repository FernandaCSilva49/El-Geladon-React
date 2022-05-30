import "./Home.css"
import PaletaLista from "components/PaletaLista/PaletaLista"
import Navbar from "components/Navbar/Navbar"
import sacola from "assets/icons/sacola.svg"
import logo from "assets/logo.svg"

function Home(){

    // js

    let isTrue = true
    
    return (
        <div className="Home" 
        
            style={{margin: "15px", padding: '15px'}}> 
            {}
            <Navbar 
                logo={logo}
                sacola={sacola}
            />
            <div className="Home__container">
                <PaletaLista />
            </div>
            El Geladon
            {isTrue ? "HelloWorld" : "Bye"}
        </div>
        )
}

export default Home