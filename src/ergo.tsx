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
                <PageTitles pageTitle='Ergo Health' tagline='Log in screen' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Tentacle Map' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/Ergo/tentacleMap.png" ></img>
                </div>
                <div>
                    <PageSection sectionTitle='Persona' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/Ergo/persona.png" ></img>
                </div>
                <div>
                    <PageSection sectionTitle='Final' /> <br />
                </div>
                <div className="projectNoHover">
                    <div className="multipleImages">
                        <img src="./Images/Ergo/ergoHealth.png" ></img>
                    </div>
                    <div className="multipleImages">
                        <img src="./Images/Ergo/ergoScreen2.png" ></img>
                    </div>
                    <div className="multipleImages">
                        <img src="./Images/Ergo/ergoScreen1.png" ></img>
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