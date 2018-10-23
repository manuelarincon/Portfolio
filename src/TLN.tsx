import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/terry.css';

export class TLN extends React.Component{
    descriptionComponents = [{topic: "Task: ", topicDes:"TLN Global Export asked me to re-create their logo. They wanted a cleaner/professional feel while mainting the previous colors and concept."},
                             {topic: "Solution: ", topicDes:"They loved the military tag concept and my simplification of their map image. I cleaned up their custom font and maintained the same colors as requested."},
                             {topic: "Technologies: ", topicDes:"Business Card, Logo, Rebrand"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                <PageTitles pageTitle='TLN Global Export' tagline='Logo Re-brand' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Logo/Business Card' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/TLN/Logo.png" ></img>
                    <img src="./Images/TLN/BusinessCard.png" ></img>
                </div>
            </div>
        )
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