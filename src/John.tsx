import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/terry.css';

export class John extends React.Component{
    descriptionComponents = [{topic: "Concept: ", topicDes:"A means of communication for John and his clients outside of the gym."},
                             {topic: "Solution: ", topicDes:"A mobile application for John to send messages and keep track of his clients throughout their fitness journey." +
                                                            "The application would also have short demonstrations of exercises and a way for the client to keep track of their progress."},
                             {topic: "Technologies: ", topicDes:"Wireframe, UX"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                <PageTitles pageTitle='John' tagline='Personal Trainer App' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='Wireframes' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/John/wireframes.png" />
                </div>
                <br />
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