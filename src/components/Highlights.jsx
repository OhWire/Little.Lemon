import CalltoAction from "./Calltoaction";
import "../App.css"
import SpecialImg1 from "./Images/Salad.jpg";
import SpecialImg2 from "./Images/tomatenbrot.jpeg"
import SpecialImg3 from "./Images/lemondessert.jpg"


function Highlights() {
    return(
    <>
        <div className="Highlights">
            <div className="CTASection">
                <CalltoAction/>
            </div>
            <div className="Cards">
                <div className="Card">
                    <div className="SpecialImg"><img className="SpecialImg Special" src={SpecialImg1} /></div>
                    <div className="SpecialDescription">
                        <h3>Greek Salad<span className="Price">$10.99</span></h3>
                        <p>Mixed Salads with Feta Cheese Tomatos Cucumber, Red Onions and Olives, served with our Homemade Dressing  </p>
                        <h4>Order for <span className="Delivery"><a href="#">Delivery</a></span></h4>
                    </div>
                </div>
                <div className="Card">
                    <div className="SpecialImg"><img className="SpecialImg Special" src={SpecialImg3} /></div>
                    <div className="SpecialDescription">
                        <h3>Lemon Cake<span className="Price">$10.99</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas</p>
                        <h4>Order for <span className="Delivery"><a href="#">Delivery</a></span></h4>
                    </div>
                </div>
                <div className="Card">
                    <div className="SpecialImg"><img className="SpecialImg Special" src={SpecialImg2} /></div>
                    <div className="SpecialDescription">
                        <h3>Bruschetta<span className="Price">$10.99</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis lacinia arcu a rhoncus. Nunc pellentesque sapien eget lectus aliquet, et mollis nisi egestas</p>
                        <h4>Order for <span className="Delivery"><a href="#">Delivery</a></span></h4>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Highlights;