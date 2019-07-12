import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class Ergo extends React.Component {
    descriptionComponents = [{topic: "Problem Statement: ", topicDes:"Accessing healthcare information is very tedious and not everyone is technologically adept."+ 
                                     "It is also handles sensitive, personal documentation that people don’t frequently visit." },
                             {topic: "Solution: ", topicDes:"Create a secure yet simple system that houses patients’ sensitive and casual health information." + 
                                     "With a target user demographic of an older audience, log in experience is simple. No usernames or passwords that can be forgotten," + 
                                     "using a biometric identification and IP address location to determine secure lines. "},
                             {topic: "Technologies: ", topicDes:"Wire Framing, UI, UX"},
                             {topic: "Team Members: ", topicDes:"Esther Amaku, Kathleen De La Llata, Jessica Lin and Manuela Rincon"}]

    render () {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                 <div className='projectNoHover'>
                    <PageTitles pageTitle='Ergo Health' tagline='Patient Registration/Login' /> <br />
                    <div className="descriptionText">
                        <p>Ergo Health is my teams solution for a patient's registration and login experience for 
                            Dell Medicals future Electronic Health Record (E.H.R.) interface. The new Dell Medical School built south 
                            of the UT campus partnered with the design school for this healthcare interface design project/challenge.</p>
                        <div></div>
                    </div> 
                    <br />  
                    <div className="descriptionText">     
                        <p>Divided into teams of 4/5, our team's solution and process:</p>
                    </div>
                    <br /><br />
                    <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Ergo/ergoScreen2.png" />
                            <div></div>
                            <div></div>
                            <img src="./Images/Ergo/ergoScreen1.png" />
                    </div>
                    <br />< br/>
                    <div className="descriptionText">
                        <h1>Overview</h1>
                        <div></div>
                        <p><b>Main Roles:</b> UX Research, QA + mockups
                            <br />
                            <br />
                            <b>Tools:</b> GSuite, InVision, Illustrator, Photoshop</p>
                        </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Problem Statement</h1>
                        <div></div>
                        <p>Create a secure and easy to navigate registration/log in that meets HIPAA (Health Insurance 
                            Portability and Accountability Act) security standards while keeping our key persona at the forefront.
                        </p>
                    </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Persona</h1>
                        <div></div>
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Ergo/persona.png" ></img>
                        </div>
                    </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Tentacle Map</h1>
                        <div></div>
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Ergo/tentacleMap.png" ></img>
                        </div>
                    </div>
                    <div className="bottomSpace"></div>
                </div>
            </div>
        );
    }
}

const DescriptionComponent = (props: {
    topic: String,
    topicDes: String
}) => {

    return (
        <div>
            <p><b>{props.topic}</b>{props.topicDes}</p>
        </div>
    )
}