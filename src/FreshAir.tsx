import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

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

export class FreshAir extends React.Component {
    descriptionComponents = [{topic: "Personal Project: ", topicDes:"I had the idea of creating a air-filter replacement service after a two day search for my hard-to-find air-filter."},
                             {topic: "Outcome: ", topicDes:"FreshAir is a luxury commodity for those who have the extra cash and also struggle to find/replace their air-filters."},
                             {topic: "Technologies: ", topicDes:"UI, UX, WireFraming"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='FreshAir' tagline='Air-filter replacement service' /> <br />
                    <div className="descriptionText">
                        <p>
                            FreshAir is an air-filter replacement service I conceptualized during a long week of
                            driving around to various locations in attempt to find air-filters for my own place.
                        </p>
                    </div>
                    <br />
                    <div className="descriptionText">
                        <p>
                            Using this concept as design practice, bellow are the low-fi wireframes + final UI direction.
                        </p>
                    </div>
                    <br /><br />
                    <div className="miniGrid">
                            <div></div>
                            <img src="./Images/FreshAir/webUX.png" />
                            <div></div>
                            <div></div>
                            <img src="./Images/FreshAir/webUI.png" />
                            <div></div>
                            <div></div>
                            <img src="./Images/FreshAir/mobileUX.png" />
                            <div></div>
                            <div></div>
                            <img src="./Images/FreshAir/mobileUI.png" />
                        </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Overview</h1>
                        <div></div>
                        <p><b>Roles:</b> Research, UI, WireFraming 
                            <br />
                            <br />
                            <b>Tools:</b>Illustrator, AdobeXD</p>
                        </div>
                    <br /><br />
                    <div className="bottomSpace"></div>
                </div>
            </div>
        )
    }
}