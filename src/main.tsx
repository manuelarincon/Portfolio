import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { loadIcons } from './Images/icons';
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Thumbnail } from "./Components/Thumbnail";
import { Terry } from "./terry";
import "./Styles/mainStyles.css";
import "./Images/Rincon_Resume.pdf";

loadIcons();

const Home = () => {
    return <div className="projects">
        <Thumbnail internalLink ="/Terry" image = "../Images/placeholder.jpg" title = "Terry" description = "Building Exterior + Wayfinding" technologies = "Presentation | Wayfinding | Team | Mockups"/>
        <Thumbnail internalLink ="/freshAir" image = "../Images/placeholder.jpg" title = "Fresh Air" description = "Subsription service to replace air filters in home/apartment" technologies = "Wire Framing | UI | Branding"/>
        <Thumbnail internalLink ="/freshAir" image = "../Images/placeholder.jpg" title = "Ergo Health" description = "Log in screen concept for UT Medical Center." technologies = "Wire Framing | UI | UX | Team"/>
        <Thumbnail internalLink ="/freshAir" image = "../Images/placeholder.jpg" title = "John" description = "Personal trainer app" technologies = "Wire Framing | UX"/>
        <Thumbnail internalLink ="/freshAir" image = "../Images/placeholder.jpg" title = "DD" description = "Watch with built in breathalyzer in attempts to prevent drunk driving and educate. Concept." technologies = "Wire Framing | UI | UX"/>
        <Thumbnail internalLink ="/freshAir" image = "../Images/placeholder.jpg" title = "" description = "Personal project focused on music listening habbits" technologies = "Research | Poster "/>
    </div> 
}

class Main extends React.Component
{
    render()
    {
        return (
            <div>
                <div className ="topNavigation">
                    <div className="navbar">
                        <div className="log"><FontAwesomeIcon icon="moon" /></div>
                        <div className="languages">English  <FontAwesomeIcon icon="caret-left" /></div>
                        <div className="email"><FontAwesomeIcon icon="envelope" /></div>
                    </div>
                </div>
                <div className="mainContent"> 
                    <PageTitles pageTitle='Manuela Rincon' tagline='Designer/Programer' /> <br/>
                    <p className="bio">Designer with front-end laguage skills in HTML5 & CSS. <br/>
                       Expanding on JavaScript & JQuery.<br/>
                       Check out some of my project below.<br/> 
                       <br/>
                       Drop me a line <br/>
                       <a href={pdf}>Resume(PDF)</a></p>
                    <PageSection sectionTitle='Projects' /> <br />
                    <BrowserRouter>   
                        <div>
                            <Route path="/" exact component={Home} />
                            <Route path="/Terry" component={Terry} />
                        </div> 
                    </BrowserRouter>
                </div>
                <div className="bottomElements">
                    <p>Creatd by Manuela Rincon</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("reactPortfolio")
);
