import "../App.css"
import Chef from "./Images/Chef.jpg"

function Hero() {
    return(
        <>
        <div className="Hero">
                    <div className="Description">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual enviroment. The restaurant features a locally-sourced menu with daily specials.</p>
                        <button>Reserve a Table</button>
                    </div>
                    <div className="HeroImage">                    
                        <img src={Chef} alt="HeroPic" className="Image Chef" />
                    </div>  
        </div>    
        </>
    )
}

export default Hero;


