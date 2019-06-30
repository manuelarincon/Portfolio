import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class TLN extends React.Component{
    descriptionComponents = [{topic: "Client Project: ", topicDes:"TLN Global Export asked me to re-create their logo. They wanted a cleaner/professional feel while maintaining the previous colors and concept."},
                             {topic: "Outcome: ", topicDes:"They loved the military tag concept and my simplification of their map image. I cleaned up their custom font and maintained the same colors as requested."},
                             {topic: "Technologies: ", topicDes:"Business Card, Logo, Rebranding"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='TLN Global Export' tagline='Logo Re-brand' /> <br />
                        <div className="descriptionText">
                            <p>TLN Global Export is a baggage and scales solution company who have recently relocated to Houston, TX.
                                They asked me to re-create their logo. They wanted a cleaner/professional feel while maintaining 
                                their original colors and concept.
                            </p>
                            <div></div>
                        </div> 
                        <br />
                        <div className="descriptionText">     
                            <p>Bellow is the final outcome presented via business card.
                            </p>
                        </div>
                    <br /><br />
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/TLN/BusinessCard.png" ></img>
                        </div>
                    <br /><br />
                    <div className="descriptionText">
                            <h1>Overview</h1>
                            <div></div>
                            <p><b>Role:</b> Visual Designer, Branding
                                <br />
                                <br />
                                <b>Tools:</b> Illustrator, PhotoShop </p>
                    </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Old vs New</h1>
                    </div>
                    <div className="miniGrid">
                            <div></div>
                            <div className="oldvsnew">
                                <img src="./Images/TLN/originalLogo.png" >
                                </img><img src="./Images/TLN/Logo.png" ></img>
                            </div>
                            
                            <div></div>
                            <div></div>
                            
                            <div></div>
                    </div>
                    <br /><br />
                        <div className="descriptionText">
                        <h1>Problem + Solution</h1>
                            <div></div>
                            <p><b>Issue 1:</b> Logo looks and feels outdated. World map was stretched and the focal point instead of company name.
                                <br />
                                <br />
                                <b>Solution 1:</b> Simplified the world to the outline of the Americas, added consistency in the breakup of the TLN font, enlarged it to make focal point.
                                <br />
                                <br />
                                <br />
                                <b>Issue 2:</b> Image file not scalable.
                                <br />
                                <br />
                                <b>Solution 2:</b> Created new logo in Illustrator to take advantage of SVG properties for easy scalability in the future.
                                <br />
                                <br />
                                <br />
                                <b>Issue 3:</b> No official establishment of brand guidelines.
                                <br />
                                <br />
                                <b>Solution 3:</b> New font paring with original TLN custom font, selected Pantone colors closest to original and created internal document with guides.
                            </p>
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

    return (
        <div>
            <p><b>{props.topic}</b>{props.topicDes}</p>
        </div>
    )
}