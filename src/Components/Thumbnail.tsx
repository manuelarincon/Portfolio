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
                <Link to={props.internalLink}><img src={props.image} alt='Project Thumbnail'></img></Link> <br/>
                <div>
                    <p><p className="projName">&mdash;{props.title}</p>
                    <p className="description">{props.description}</p>
                    <p className="technologies">{props.technologies}</p>
                    </p>
                </div>
            </div>
    )             
}