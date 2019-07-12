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

export class Chardonnay extends React.Component {
    descriptionComponents = [{topic: "Client Project: ", topicDes:"Create custom lettering along with a single page webpage for new hair salon in north California called Chardonnay. "},
                             {topic: "Outcome: ", topicDes:"Script font with brush texture for the lettering paired with a serif font for the webpage build on Wix. I also helped redirect the custom domain previously bought to the wix web page. " +
                                                            "Click the web image to check out the wix page."},
                             {topic: "Technologies: ", topicDes:"Webpage, Logo, Typography"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {
                        
        }
        return (
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='Chardonnay' tagline='Local hair salon' /> <br />
                        <div className="descriptionText">
                            <p>Chardonnay is a hair salon in Monterey, California providing style, cut and color to the black community.
                            As a new business, they seeked my help creating their first CMS site to kick-start their business.</p>
                            <div></div>
                        </div> 
                        <br />  
                        <div className="descriptionText">     
                            <p>Bellow is my final single page Wix webpage with custom type for the company name.</p>
                        </div>
                    <br /><br />
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Chardonnay/logo.png" />
                            <div></div>
                            <div></div>
                            <a href="http://chardonnay-hair.com" target="_blank"><img src="./Images/Chardonnay/browserView.png" /></a>
                        </div>
                    <br /><br />
                        <div className="descriptionText">
                            <h1>Overview</h1>
                            <div></div>
                            <p><b>Role:</b> Information Architecture, UI Designer, 
                                <br />
                                <br />
                                <b>Tools:</b> Wix, Illustrator, Iwantmyname.com, Pinterest </p>
                        </div>
                    <br /><br />
                    {/* <div className="descriptionText">
                            <h1>Constrains</h1>
                            <div></div>
                            <p> This is Chardonnays first website to kickstart the business. With a limit in resources 
                                and no experience in setting up a retail/business space online I helped guide and 
                                educate the team as they kick-started their business.<br /><br />
                                Using the head of a mannequin, some bed sheets, two colored lights and a lighter 
                                I captured the two final images seen in the front cover and inside slip. </p>
                        </div> */}
                    <div className="bottomSpace"></div>
                </div>
            </div>
        )
    }
}