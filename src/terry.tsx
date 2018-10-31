import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/terry.css';

export class Terry extends React.Component {
    descriptionComponents = [{topic: "Problem: ", topicDes:"Visitors where having trouble finding the entrance with no exterior signage. Thirteen23, with its prime location"+
                                                "in downtown Austin, wanted a way to let the Austin community know they were there and have a source of communication." },
                             {topic: "Solution: ", topicDes:"Simple exterior sign that would wrap around the wall at eye level along with Terry the door bot."},
                             {topic: "Technologies: ", topicDes:"Wayfinding, Mockups, Presentation"}]
    render () {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return(
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='Terry' tagline='Data ATM + Wayfinding for Thirteen23' /> <br />
                    {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Presentation' /> <br />
                </div>
                <div className="projectNoHover">
                    <div className="row">
                        <div className="column">
                            <img src='./Images/Terry/DATA1.png'></img>
                            <img src='./Images/Terry/DATA3.png'></img>
                            <img src='./Images/Terry/DATA5.png'></img>
                        </div>
                        <div className="column">
                            <img src='./Images/Terry/DATA2.png'></img>
                            <img src='./Images/Terry/DATA4.png'></img>
                            <img src='./Images/Terry/DATA6.png'></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src='./Images/Terry/DATA7.png'></img>
                            <img src='./Images/Terry/DATA9.png'></img>
                            <img src='./Images/Terry/DATA11.png'></img>
                        </div>
                        <div className="column">
                            <img src='./Images/Terry/DATA8.png'></img>
                            <img src='./Images/Terry/DATA10.png'></img>
                        </div>
                    </div>
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