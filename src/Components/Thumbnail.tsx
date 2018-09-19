import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './../Styles/thumbnail.css';

export const Thumbnail  = (props: {
    internalLink: string,
    image: string,
    title: string,
    description: string,
    technologies: string
}) => {

    return (
        <div className="thumnail">
                <Link to={props.internalLink}><img src={props.image} alt='FreshAir Project'></img></Link> <br/>
                <div className="glleryDescription">
                    <p>&mdash;{props.title}<br/>
                    {props.description}<br/>
                    {props.technologies}
                    </p>
                </div>
            </div>
    )             
}