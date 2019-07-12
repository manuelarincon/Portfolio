import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import './Styles/project.css';

export class Spark extends React.Component{
    descriptionComponents = [{topic: "Layouts: ", topicDes:"Spark Magazine is a student run fashion magazine releasing an issue each semester. " +
                             "Students are divided into team (each with a writer, editor, stylist, designer, models, hmua, and photographer) to create two possible stories to be featured in that seasons issue. "},
                             {topic: "Technologies: ", topicDes:"Layout, Publishing, InDesign"}]
    
    render() {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        var test = () => {

        }
        return (
            <div>
                <div className='projectNoHover'>
                <PageTitles pageTitle='Spark Magazine' tagline='Publication Layouts' /> <br />
                    <div className="descriptionText">
                            <p>Spark Magazine is a student run fashion magazine that publishes a new issue 
                                each semester. Students are divided into teams (each with a writer, editor,
                                stylist, designer, models, hmua and photographer) to create two potential 
                                stories to be featured that seasons release. 
                            </p>
                            <div></div>
                        </div> 
                        <br />  
                        <div className="descriptionText">     
                            <p>Bellow is my final published design work for them from issues No. 4, 5 and 8.</p>
                    </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Issue No.4</h1>
                        <div></div>
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Spark/no4.png" ></img>
                        </div>
                    </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Issue No.5</h1>
                        <div></div>
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Spark/no5.png" ></img>
                        </div>
                    </div>
                    <br /><br />
                    <div className="descriptionText">
                        <h1>Issue No.8</h1>
                        <div></div>
                        <div className="miniGrid">
                            <div></div>
                            <img src="./Images/Spark/no8.png" ></img>
                        </div>
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