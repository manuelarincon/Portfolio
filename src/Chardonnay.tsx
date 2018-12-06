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
                <PageTitles pageTitle='Chardonnay' tagline='Local hair salon in Monterey, California' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Logo/Web' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/Chardonnay/logo.png" ></img>
                    <a href="http://chardonnay-hair.com" target="_blank"><img src="./Images/Chardonnay/webFinal1.png" ></img></a>
                </div>
            </div>
        )
    }
}