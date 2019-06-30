import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class PureHeroine extends React.Component{
    descriptionComponents = [{topic: "Album Remake: ", topicDes:"I found Lorde's Pure Heroine album cover very simple and a bit bland to the amount of the emotion and drama presented in the music."},
                             {topic: "Solution: ", topicDes:"I wanted the album cover to portray the energy of the music while maintaining some simplicity and mystery from the original cover. " +
                                                            "With the assistance of <a href='www.google.com'>Neftaly Torrez</a> I captured the two stunning images of the mannequin as the 'beauty queen'. "},
                             {topic: "Technologies: ", topicDes:"Photography, Layout, Illustrator"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='Pure Heroine' tagline='Album Cover Remake' /> <br />
                    <div className="descriptionText">
                            <p>Lorde is a singer/songwriter from New Zealand who released her first album Pure Heroin back in 2013.
                                A personal project, I was unsatisfied with the albums artwork and created my own version completed 
                                with the assistance of <a href="https://www.instagram.com/n.eff/?hl=en" target="_black">Neftaly Torres</a> for the photography.  </p>
                            <div></div>
                        </div> 
                        <br />  
                        <div className="descriptionText">     
                            <p>Bellow is my final work including the front + back covers + inside slip.</p>
                        </div>
                    <br /><br />
                        <div className="miniGrid">
                                <div></div>
                                <img src="./Images/CoverAlbum/Cover+Vinyl.png" />
                                <div></div>
                                <div></div>
                                <img src="./Images/CoverAlbum/insideSleeve.png" />
                                <div></div>
                                <div></div>
                                <img src="./Images/CoverAlbum/back+front.png" />
                        </div>
                        <br /><br />
                            <div className="descriptionText">
                                <h1>Overview</h1>
                                <div></div>
                                <p><b>Role:</b> Visual Designer, Photographer
                                    <br />
                                    <br />
                                    <b>Tools:</b> PhotoShop, Lightroom, Nikon500, Illustrator </p>
                            </div>
                    <br /><br />
                        <div className="descriptionText">
                            <h1>Concept</h1>
                            <div></div>
                            <p>I wanted the album cover to portray the energy of the music while maintaining 
                                the mystery around the artist and music from the original cover. <br /><br />
                                Using the head of a mannequin, some bed sheets, two colored lights and a lighter 
                                I captured the two final images seen in the front cover and inside slip. </p>
                        </div>
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

    // let description = props.topicDes;
    // let linkSartPosition = 3;
    // let frontPart = "starting";
    // let endPart = "final";
    // let linkString = "somelinkhere";
    // let anchorString = "Manuela Rincon"

    // let anchorTag = <a href="${linkString}">anchorString</a>
    // let topicDescription = <span>frontPart<span>{anchorTag}</span>endPart</span>

    return (
        <div>
            <p><b>{props.topic}</b>{props.topicDes}</p>
        </div>
    )
}