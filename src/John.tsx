import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class John extends React.Component{
    descriptionComponents = [{topic: "Concept client pitch: ", topicDes:"A means of communication for John and his clients outside of the gym."},
                             {topic: "Solution: ", topicDes:"A mobile application for John to send messages and keep track of his clients throughout their fitness journey." +
                                                            "The application would also have short demonstrations of exercises and a way for the client to keep track of their progress." + 
                                                            "This project did not make it past negotiations, but bellow is a snip-it of what I presented to John."},
                             {topic: "Technologies: ", topicDes:"Wireframe, UX"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                    <PageTitles pageTitle='John' tagline='Personal Trainer App' /> <br />
                    <div className="descriptionText">
                        <p>John is a personal trainer and gym owner in the SugarLand area. He was 
                            interested in building his own personal application in efforts to both 
                            digitize and increase his sales. This project did not move past the initial
                            negotiations as John was unaware on the true cost of developing an app.
                        </p>
                        <div></div>
                    </div> 
                    <br />  
                    <div className="descriptionText">     
                        <p>I presented some low-fidelity cut out wireframes based on an initial meeting 
                            had on Johns expectations on the app. Those cut-outs are bellow. 
                        </p>
                    </div>
                    <br /><br />
                    <div className="projectNoHover">
                        <img src="./Images/John/wireframes.png" />
                    </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Overview</h1>
                        <div></div>
                        <p><b>Roles:</b> UX 
                            <br />
                            <br />
                            <b>Tools:</b> Sketch Paper, Pen</p>
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