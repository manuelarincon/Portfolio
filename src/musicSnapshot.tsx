import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/terry.css';

export class Methods extends React.Component {
    descriptionComponents = [{topic: "Task: ", topicDes:"Practice a research method and collect intel for a week to then visually display."},
                             {topic: "Solution: ", topicDes:"Keep track of the type of my music along with listening time throughout a normal week at University."},
                             {topic: "Technologies: ", topicDes:"Infographic, Poster, Research"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }

        return(
            <div>
                <div className='projectNoHover'>
                <PageTitles pageTitle='MethodOne' tagline='Music Snapshot' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Final' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/Methods/musicSnapshot.png" ></img>
                </div>
                <br />
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