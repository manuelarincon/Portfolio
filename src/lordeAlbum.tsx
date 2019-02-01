import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class PureHeroine extends React.Component{
    descriptionComponents = [{topic: "Album Remake: ", topicDes:"I found Lorde's Pure Heroine album cover very simple and a bit bland to the amount of the emotion and drama presented in the music."},
                             {topic: "Solution: ", topicDes:"I wanted the album cover to portray the energy of the music while maintaining some simplicity and mystery from the original cover. " +
                                                            "With the assistance of Neftaly Torrez I captured the two stunning images of the mannequin as the 'beauty queen'. "},
                             {topic: "Technologies: ", topicDes:"Photography, Layout, Illustrator"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                <PageTitles pageTitle='Pure Heroine' tagline='Album Cover Remake' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Mockups w/inside sleeve' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/CoverAlbum/Cover+Vinyl.png" />
                    <img src="./Images/CoverAlbum/insideSleeve.png" />
                    <img src="./Images/CoverAlbum/back+front.png" />
                </div>
                <div className="bottomSpace"></div>
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