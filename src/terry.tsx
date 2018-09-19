import * as React from 'react';
import { Link } from "react-router-dom";
import {PageTitles} from './Components/pageTitles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/terry.css';

export class Terry extends React.Component {
    descriptionComponents = [{topic: "Problem", topicDes:"Visitors where having trouble finding the entrance with no exterior signage. Thirteen23, with its prime location"+
                                                "in donwtown Austin, wanted a way to let the Austin community know they were there and have interactions." },
                             {topic: "Solution", topicDes:"Simple exterior sign that would wrap around the wall at eye level along with Terry the door bot."},
                             {topic: "Technologies", topicDes:"Wayfinding, Mockups, Presentation"}]
    render () {
        const printedDescriptions = this.descriptionComponents.map( t => <DescriptionComponent {...t} />)
        return(
            <div>
                
                <PageTitles pageTitle='Terry' tagline='Data ATM + Wayfinding for Thirteen23' />
                <div className='projectDescription'>{printedDescriptions}</div>
                <Link to="/">Home
                <div>
                        Favorite Food: <FontAwesomeIcon icon="envelope" />
                    </div>
                </Link>
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