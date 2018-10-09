import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { loadIcons } from './Images/icons';
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Thumbnail } from "./Components/Thumbnail";
import { Terry } from "./terry";
import { Ergo } from "./ergo";
import { DD } from "./DD";
import { Methods } from "./musicSnapshot";
import "./Styles/mainStyles.css";
// import PDF from "./Rincon_Resume.pdf";

loadIcons();

const Home = () => {
    return (
    <div>
        <div className="projects">
            <PageTitles pageTitle='Manuela Rincon' tagline='Designer/Programer' /> <br/>
                <p className="bio">Designer with front-end laguage skills in HTML5 & CSS. <br/>
                       Expanding on JavaScript & JQuery.<br/>
                       Check out some of my project below.<br/> 
                       <br/>
                <a className="bodyContentLink" href='mailto:manuela.r@utexas.edu'>Drop me a line</a> <br/>
                <a className="bodyContentLink" href='./Rincon_Resume.pdf' download='Rincon_Resume.pdf'>Resume(PDF)</a>
                </p> 
        </div>
        <div>
            <PageSection sectionTitle='Projects' /> <br />
        </div>
        <div className="projects">
            <Thumbnail internalLink ="/Terry" image = "../Images/1323Thum.png" title = "Terry" description = "Building Exterior + Wayfinding" technologies = "Presentation | Wayfinding | Team | Mockups"/>
            <Thumbnail internalLink ="/freshAir" image = "../Images/methodsThum.png" title = "Fresh Air" description = "Subsription service to replace air filters in home/apartment" technologies = "Wire Framing | UI | Branding"/>
            <Thumbnail internalLink ="/Ergo" image = "../Images/ErgoThum.png" title = "Ergo Health" description = "Log in screen concept for UT Medical Center." technologies = "Wire Framing | UI | UX | Team"/>
            <Thumbnail internalLink ="/John" image = "../Images/JohnThum.png" title = "John" description = "Personal trainer app" technologies = "Wire Framing | UX"/>
            <Thumbnail internalLink ="/DD" image = "../Images/DDThum.png" title = "DD" description = "Watch with built in breathalyzer in attempts to prevent drunk driving and educate. Concept." technologies = "Wire Framing | UI | UX"/>
            <Thumbnail internalLink ="/Methods" image = "../Images/methodsThum.png" title = "Music Snapshot" description = "Personal project focused on music listening habbits" technologies = "Research | Poster "/>
        </div>
    </div> 
    )
}

class Main extends React.Component
{
    render()
    {
        return (
             <BrowserRouter> 
            <div>
                <div className ="topNavigation">
                    <div className="navbar">
                        <Link to='/'><div className="log"><FontAwesomeIcon icon="moon" /></div></Link>
                        <div className="languages">English  <FontAwesomeIcon icon="caret-left" /></div>
                        <div className="email"><a className="headerContentLink"href='mailto:manuela.r@utexas.edu'>
                        <FontAwesomeIcon icon="envelope" /></a></div>
                    </div>
                </div>
                <div className="mainContent"> 
                     
                        <div>
                            <Route path="/" exact component={Home} />
                            <Route path="/Terry" component={Terry} />
                            <Route path="/Ergo" component={Ergo} />
                            <Route path="/DD" component={DD} />
                            <Route path="/Methods" component={Methods} />
                        </div> 
                    
                </div>
                <div className="bottomElements">
                    <p className="copyRight">&copy; Manuela Rincon</p>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("reactPortfolio")
);