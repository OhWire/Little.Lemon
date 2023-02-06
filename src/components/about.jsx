import Mario from "./Images/Mario.jpg"
import Adrian from "./Images/Adrian.jpg"

function About() {
    return(
        <>
            <div className="AboutSection">
                <div className="AboutDescription">   
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis lacinia arcu a rhoncus. . Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas</p>
                    
                </div>
                <div className="AboutImageContainer">
                    <div className="AboutImage1">
                        <img className="AboutImage1 Image" src={Adrian} alt="Adrian" />
                    </div>
                    <div className="AboutImage2 ">
                        <img className="AboutImage2 Image" src={Mario} alt="Mario" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default About;