import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/terry.css';


export class DD extends React.Component {
    descriptionComponents = [{topic: "Concept: ", topicDes:"A descrit tool that would help user keep track of their XX and prevent them from drunk driving while"+
                             "educating them on their bodys alcahol limits/tolerance. " },
                             {topic: "Solution: ", topicDes:"Wearable watch with built in breathalyzer. "},
                             {topic: "Technologies: ", topicDes:"Mockups, UI, Research"}]

    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return(
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='DD' tagline='Watch with a built in breatherlizer' /> <br />
                    {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Final' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/DD/FinalScreens.png" ></img>
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