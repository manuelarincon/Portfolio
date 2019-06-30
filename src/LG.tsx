import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class LG extends React.Component{
    descriptionComponents = [{topic: "LG Website: ", topicDes:"Before I left the LG team, I was in-charge of recreating the company website using SquareSpace with an archive containing all images for future employees to maintain. " +
                             "Some key issues I aimed to fix include: the sites clarity on product and services, no more dead links, new employee pictures, and a modern fun feel. " +
                             "Original promo video is played on laptop+ screens, still image of couple on tablet size and smaller. Why they haven't published the new site after my departure, I have no idea." },
                             {topic: "Technologies: ", topicDes:"Layout, Web, SquareSpace"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='LG Event Pro' tagline='SquareSpace Site' /> <br />
                        <div className="descriptionText">
                            <p>LG Event Pro is an entertainment company based in Houston, Tx.
                            During my final months with them, I worked on MVP SquareSpace
                            version of their website.</p>
                            <div></div>
                        </div> 
                        <br />  
                        <div className="descriptionText">     
                            <p>Bellow is my final work for them in iPad view, they have chosen to not 
                            published this site and rehired previous developer for their current live webpage.</p>
                        </div>
                    <br /><br />
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/LG/mockup1.png" />
                        </div>
                    <br /><br />
                        <div className="descriptionText">
                            <h1>Overview</h1>
                            <div></div>
                            <p><b>Role:</b> Information Architecture, UI Designer, Photographer, QA
                                <br />
                                <br />
                                <b>Tools:</b> SquareSpace, Dropbox, InVision, PhotoShop, Lightroom, 17Hats </p>
                        </div>
                    <br /><br />
                        <div className="descriptionText">
                            <h1>Problem + Solution</h1>
                            <div></div>
                            <p><b>Issue 1:</b> Lack of clear communication of products and services offered on homepage.
                                <br />
                                <br />
                                <b>Solution 1:</b> Grid categories with images clearly highlighting the different products and 
                                service with appropriate links to more in depth page.
                                <br />
                                <br />
                                <br />
                                <b>Issue 2:</b> Dead links, inaccurate employee photos, copy writing, and outdated style that 
                                has to be updated by outside developer.
                                <br />
                                <br />
                                <b>Solution 2:</b> Switching to SquareSpace would guarantee simple consistent modern feel to 
                                entire website giving the company control easily updating by company employee and avoid
                                dead links.
                                <br />
                                <br />
                                <br />
                                <b>Issue 3:</b> Inaccurate employee photos, lack of quality recent photos, and bad copy writing. 
                                <br />
                                <br />
                                <b>Solution 3:</b> I gave a more sophisticated voice to the current copy attempting to maintain a 
                                fun, relaxed conversation feel. A new photographer was hired to take new employee pictures. 
                                I organized Dropbox folder creating categories for different venue, event type, and employee photos.</p>
                        </div>
                    <br /><br />
                        <div className="descriptionText">
                            <a href= 'https://invis.io/BGS9QK94HV8' target='_blank'><h1 className="link">InVisionLink</h1></a>
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