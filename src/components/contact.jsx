import Logo from "./Images/Logoinvert.png"


function Contact() {
    return(
        <>
            <div className="Contact">
                <div className="ContactLogo"><img src={Logo} alt="Logo" /></div>
                 <div className="Lists">
                    <div className="FooterMenu">
                    <ul className="ContactLink">
                        <li className="ContactLink"><a href="#">Home</a></li>
                        <li className="ContactLink"><a href="#">About</a></li>
                        <li className="ContactLink"><a href="#">Menu</a></li>
                        <li className="ContactLink"><a href="#">Reservations</a></li>
                        <li className="ContactLink"><a href="#">Order Online</a></li>
                        <li className="ContactLink"><a href="#">Login</a></li>
                    </ul>
                    </div>
                    <ul className="Adress">
                        <li className="HeaderAdress">Contact</li>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                    <ul>
                        <li className="SMHeader">Social Media Links</li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ul>
                </div>   
            </div>
        </>
    )
}

export default Contact;