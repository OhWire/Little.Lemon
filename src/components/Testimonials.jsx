import Person from "./Images/Person1.jpg"

function Testimonials () {
    return(
        <>
            <div className="Testimonials">
                <div className="TestimonialsHeading">
                    <h2>Testimonials</h2>
                </div>
                <div className="Profiles "> 
                    <div className="Profile">
                        <h3>Karla</h3>
                        <div className="PersonImage Image"><img className="ProfilePicture Image"  src={Person} /></div>
                        <div className="StarRating">StarRating</div>
                        <p>"This Restaurant is simply amazing, i really enjoyed my Stay"</p>
                    </div>

                    <div className="Profile">
                        <h3>Anna</h3>
                        <div className="PersonImage Image"><img className="ProfilePicture Image"  src={Person} /></div>
                        <div className="StarRating">StarRating</div>
                        <p>"This Restaurant is simply amazing, i really enjoyed my Stay"</p>
                    </div>

                    <div className="Profile">
                        <h3>Lena</h3>
                        <div className="PersonImage Image "><img className="ProfilePicture Image "  src={Person} /></div>
                        <div className="StarRating">StarRating</div>
                        <p>"This Restaurant is simply amazing, i really enjoyed my Stay"</p>
                    </div>
                    
                    <div className="Profile">
                        <h3>Lena</h3>
                        <div className="PersonImage Image "><img className="ProfilePicture Image "  src={Person} /></div>
                        <div className="StarRating">StarRating</div>
                        <p>"This Restaurant is simply amazing, i really enjoyed my Stay"</p>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Testimonials;