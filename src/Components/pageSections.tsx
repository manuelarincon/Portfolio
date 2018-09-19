import * as React from 'react';
import '../Styles/PageSections.css';

export const PageSection = (props: {
    sectionTitle: String
}) => {

    return (
        <div className="rowDivider">
            <div className="section">
                <h1>{props.sectionTitle}</h1> <br/>
            </div>
        </div>
    )
}