import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class UTAOFA extends React.Component{
    descriptionComponents = [{topic: "Yearly lecture and exhibition poster: ", topicDes:"School of Architecture holds lectures and exhibitions throughout the school year. They wanted to promote with an eye catching design highlighting the speakers. "},
                             {topic: "Solution: ", topicDes:" I challenged myself to only use text for my approach using the color red to highlight the speakers names. The solid black lines created a visual almost like staircases allowing me to use the negative space to include the schools name."},
                             {topic: "Technologies: ", topicDes:"Poster, Typography, Graphics"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='UTAOFA' tagline='Poster for the School of Architecture' /> <br />
                    <div className="descriptionText">
                            <p>The School of Architecture at UT holds lectures and exhibitions for the students throughout the year. 
                                They reached out to our TypographyII class to help design that semesters promotion poster to
                                display in the architecture building. They wanted an eye catching design that highlighted the 
                                speakers.
                            </p>
                            <div></div>
                        </div> 
                        <br />  
                        <div className="descriptionText">     
                            <p>I challenged myself to only use text for my approach using the color red to bring attention to
                                the speaker names and solid black lines to create a visual to guide the eye while highlighting 
                                the school name in the negative space. Bellow is the final poster.
                            </p>
                        </div>
                    <br /><br />
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/UTAOFA/UTAOFA2.png" />
                        </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Overview</h1>
                        <div></div>
                        <p><b>Main Roles:</b> Visual Designer
                            <br />
                            <br />
                            <b>Tools:</b> Illustrator, Photoshop</p>
                        </div>
                    <br /><br />
                    <div className="bottomSpace"></div>
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