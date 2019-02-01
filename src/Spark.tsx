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
                <PageTitles pageTitle='Spark' tagline='Album Cover RemakeLayouts for student run fashion magazine' /> <br />
                {printedDescriptions}
                </div>
                <div>
                    <PageSection sectionTitle='No.4' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/Spark/no4.png" />
                </div>
                <div>
                    <PageSection sectionTitle='No.5' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/Spark/no5.png" />
                </div>
                <div>
                    <PageSection sectionTitle='No.8' /> <br />
                </div>
                <div className="projectNoHover">
                    <img src="./Images/Spark/no8.png" />
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