import * as React from 'react';



export default class Home extends React.Component
{
    render(){
        return(
            <div>
                <div>
                    <br/>
                    <p><h1>Manuela Rincon</h1>   <h3>&mdash; Designer/Programer</h3></p> 
                    <p>Designer with front-end language skills in HTML5 & CSS.<br/>
                        Expanding on JavaScript, JQuery & React.<br/>
                        Check out some of my projects below.</p>

                    <p>Drop me a line<br/>
                        Resume(PDF)
                    </p>
                </div>
                <div>
                    <div>
                        <p><h3>Projects</h3></p>
                    </div>
                    <div className="gallery">
                        <img src='freshAirThumnail.png' alt='FreshAir Project'></img> <br/>
                        <div className="glleryDescription">
                            <p>&mdash;FreshAir <br/>
                                Subscription service to replace air filters in home/apartment. <br/>
                                Wire Framing | UI | HTML | CSS 
                            </p>
                        </div>
                    </div>
                    <div className="gallery">
                        <img src='freshAirThumnail.png' alt='FreshAir Project'></img> <br/>
                        <div className="glleryDescription">
                            <p>&mdash;ErgoHealth <br/>
                                Log In screen concept for UT Medical Health Center. <br/>
                                Wire Framing | UI | Team
                            </p>
                        </div>
                    </div>
                    <div className="gallery">
                        <img src='freshAirThumnail.png' alt='FreshAir Project'></img> <br/>
                        <div className="glleryDescription">
                            <p>&mdash;John <br/>
                                Personal Trainer App <br/>
                                Wire Framing | UX | Presentation
                            </p>
                        </div>
                    </div>
                    <div className="gallery">
                        <img src='freshAirThumnail.png' alt='FreshAir Project'></img> <br/>
                        <div className="glleryDescription">
                            <p>&mdash;Terry <br/>
                                Bulding Exterior + Wayfinding <br/>
                                Presentation | Wayfinding | Team | Mockups 
                            </p>
                        </div>
                    </div>
                    <div className="gallery">
                        <img src='freshAirThumnail.png' alt='FreshAir Project'></img> <br/>
                        <div className="glleryDescription">
                            <p> &mdash;DD <br/>
                                Watch with built in breathalyzer in attempts to prevent drunk driving and educate. Concept. <br/>
                                Wire Framing | UI | UX
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p><h1>Lets work together</h1></p>
                </div>
            </div>
        );
    }
}