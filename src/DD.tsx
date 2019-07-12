import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';


export class DD extends React.Component {
    descriptionComponents = [{topic: "Concept: ", topicDes:"A discrete tool that would help user keep track of their BAC and prevent them from drunk driving while"+
                             "educating them on their bodies alcohol limits/tolerance. " },
                             {topic: "Solution: ", topicDes:"Wearable watch with built in breathalyzer. "},
                             {topic: "Technologies: ", topicDes:"Mockups, UI, Research"}]

    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return(
            <div>
                <div className='projectNoHover'>
                        <PageTitles pageTitle='DD' tagline='Watch with a built in breathalyzer' /> <br />
                        <div className="descriptionText">
                            <p>DD is concept for a discrete tool that would help users keep track fo their BAC and prevent them
                                from drunk driving while educating them on their bodies alcohol limits/tolerance.
                            </p>
                            <div></div>
                        </div> 
                        <br />  
                        <div className="descriptionText">     
                            <p>Bellow is the final interface designs for the breathalyzer watch.</p>
                        </div>
                    <br /><br />
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/DD/FinalScreens.png" />
                        </div>
                    <br /><br />
                        <div className="descriptionText">
                            <h1>Overview</h1>
                            <div></div>
                            <p><b>Role:</b> Research, UI Designer
                                <br />
                                <br />
                                <b>Tools:</b> Illustrator, PhotoShop </p>
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