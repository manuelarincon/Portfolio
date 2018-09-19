import * as React from 'react';
import '../Styles/PageTitle.css';

export const PageTitles = (props: {
    pageTitle: String,
    tagline: String,
}) => {

    return (
        <div className="titles">
            <h1>{props.pageTitle}</h1>  <p className="tagline">&mdash;{props.tagline}</p> <br/>
        </div>
    )
}