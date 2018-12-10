import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { loadIcons } from './Images/icons';
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Thumbnail } from "./Components/Thumbnail";
import { Terry } from "./terry";
import {TLN} from "./TLN";
import { Ergo } from "./ergo";
import {John} from "./John";
import { DD } from "./DD";
import { Methods } from "./musicSnapshot";
import {MessageForm} from "./messageForm";
import {Chardonnay} from "./Chardonnay";
import "./Styles/mainStyles.css";
import "./Rincon_Resume.pdf";


loadIcons();

const Home = () => {
    return (
    <div>
        <div className="projects">
            <PageTitles pageTitle='Manuela Rincon' tagline='Designer/Programmer' /> <br/>
            <p className="bio">Designer with front-end language skills in HTML5, CSS & React. <br/>
                       Expanding on other frameworks such as Typescript and Angular.<br/>
                       Check out some of my projects below.<br/> 
                       <br/>
                <Link to="/MessageForm" ><a className="bodyContentLink"> Drop me a line</a> </Link> <br/>
                <br />
                <a className="bodyContentLink" href='./Rincon_Resume.pdf' download='Rincon_Resume.pdf'>Resume(PDF)</a> <br/>
                <br />
                <a className="bodyContentLink" href='https://github.com/manuelarincon/Portfolio' >Website Source Code</a>
            </p> 
        </div>
        <div>
            <PageSection sectionTitle='Projects' /> <br />
        </div>
        <div className="projects">
            <div className="grid">
                <div className="project1">
                    <Thumbnail internalLink ="/Terry" image = "../Images/1323Thum2.png" title = "Terry" description = "Building Exterior + Wayfinding" technologies = "Presentation | Wayfinding | Team | Mockups"/>
                </div>
                <div className="project2">
                    <Thumbnail internalLink ="/TLN" image = "../Images/TLNThum.png" title = "TLN" description = "Weighing Automation Systems company rebrand" technologies = "Business Card | Logo | Rebrand"/>
                </div>
                <div className="project3">
                    <Thumbnail internalLink="/Chardonnay" image="../Images/CharThum.png" title="Chardonnay" description="Local hair salon in Monterey, California" technologies="UI | Web | Font | Logo" />
                </div>
                <div className="project4">
                    <Thumbnail internalLink ="/Ergo" image = "../Images/ErgoThum2.png" title = "Ergo Health" description = "Log in screen concept for UT Medical Center" technologies = "Wire Framing | UI | UX | Team"/>
                </div>
                <div className="project5">
                    <Thumbnail internalLink ="/John" image = "../Images/JohnThum2.png" title = "John" description = "Personal trainer app" technologies = "Wire Framing | UX"/>
                </div>
                <div className="project6">
                    <Thumbnail internalLink ="/Methods" image = "../Images/methodsThum.png" title = "Music Snapshot" description = "Personal project focused on music listening habits" technologies = "Research | Poster "/>
                </div>
                {/* <div className="project7">
                    <Thumbnail internalLink ="/DD" image = "../Images/DDThum.png" title = "DD" description = "Watch with built in breathalyzer" technologies = "Wire Framing | UI | UX"/>
                </div> */}
            </div>
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
                        {/* <div className="languages">English  <FontAwesomeIcon icon="caret-left" /></div> */}
                        <div className="email"><Link className="headerContentLink" to='/MessageForm'>
                        <FontAwesomeIcon icon="envelope" /></Link></div>
                    </div>
                </div>
                <div className="mainContent"> 
                     
                        <div>
                            <Route path="/" exact component={Home} />
                            <Route path="/Terry" component={Terry} />
                            <Route path="/TLN" component={TLN} />
                            <Route path="/Ergo" component={Ergo} />
                            <Route path="/John" component={John} />
                            <Route path="/DD" component={DD} />
                            <Route path="/Methods" component={Methods} />
                            <Route path="/MessageForm" component={MessageForm} />
                            <Route path="/Chardonnay" component={Chardonnay} />
                        </div> 
                        <div className="endNavigation">
                            <div className="endLinks">
                             <h1>Lets connect</h1>
                             <div className="endIcons">
                                <Link to='/MessageForm'><img src="./Images/socialIcons/mail.png"></img></Link>
                                <a href="www.linkedin.com/in/manuela-rincon-creative"><img src="./Images/socialIcons/linkedIn.png"></img></a>
                                <a href="https://github.com/manuelarincon"><img src="./Images/socialIcons/gitHub.png"></img></a>
                                <a href="https://dribbble.com/manuelar"><img src="./Images/socialIcons/dribble.png"></img></a>
                             </div>
                             <Link to='/'><h1 className="endHome">Home</h1></Link>
                            </div>
                            <br />  
                        </div>
                    <div className="bottomElements">
                    <p className="copyRight">&copy; Manuela Rincon</p> <br />
                    <a href="https://github.com/manuelarincon/Portfolio"><p className="gitLink">View how I built this webpage using React, ReactRouter, Typescript, Webpack, CSS & HTML5</p></a>
                </div>
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