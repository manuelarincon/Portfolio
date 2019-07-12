import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class Methods extends React.Component {
    descriptionComponents = [{topic: "Task: ", topicDes:"Practice a research method and collect intel for a week to then visually display."},
                             {topic: "Solution: ", topicDes:"Keep track of the type of my music along with listening time throughout a normal week at University."},
                             {topic: "Technologies: ", topicDes:"Infographic, Poster, Research"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }

        return(
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='MethodOne' tagline='Music Snapshot' /> <br />
                    <div className="descriptionText">
                        <p>
                            Designs method class, method one was to practice a research method and collect intel 
                            for a week to then visually display. I choose to keep track on my music listening habits
                            for the week documenting the amount of time listened to the top 5 playlists/genres of music
                            on my Spotify profile. 
                        </p>
                    </div>
                    <br />
                    <div className="descriptionText">
                        <p>
                            Biggest chunks of time I listened was when commuting and study sessions. Bellow is my final poster.
                        </p>
                    </div>
                    <br /><br />
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Methods/posterMockup.png" />
                        </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Overview</h1>
                        <div></div>
                        <p><b>Roles:</b> Research, UI 
                            <br />
                            <br />
                            <b>Tools:</b> Spotify, Illustrator, Notes</p>
                        </div>
                    <br /><br />
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