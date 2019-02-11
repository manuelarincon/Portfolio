import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class LG extends React.Component{
    descriptionComponents = [{topic: "LG Website: ", topicDes:"Before I left the LG team, I was in-charge of recreating the company website using SquareSpace creating an archive with all the images for future employees to maintain. " +
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
                <PageTitles pageTitle='LG Event Pro' tagline='Website re-make' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Screens' /> <br />
                </div>
                <div className="projectNoHover">
                    <div className="miniGrid">
                        <img src="./Images/LG/homePage.png" />
                        <img src="./Images/LG/productPage.png" />
                        <img src="./Images/LG/contactPage.png" />
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