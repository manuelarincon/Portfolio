import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { loadIcons } from './Images/icons';
import {PageTitles} from './Components/pageTitles';
import {PageSection} from './Components/pageSections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./Images/MR/LogoWT.png";
import logoHover from "./Images/MR/LogoBU.png";
import { Thumbnail } from "./Components/Thumbnail";
import {Me} from "./about";
import { Terry } from "./terry";
import {TLN} from "./TLN";
import { Ergo } from "./ergo";
import {John} from "./John";
import { DD } from "./DD";
import { Methods } from "./musicSnapshot";
import {MessageForm} from "./messageForm";
import {Chardonnay} from "./Chardonnay";
import {FreshAir} from "./FreshAir";
import {Spark} from "./Spark";
import {UTAOFA} from "./UTAOFA";
import {LG} from "./LG";
import "./Styles/mainStyles.css";
import { PureHeroine } from "./lordeAlbum";


loadIcons();

const Home = () => {
    return (
    <div>
        {/* <div className="projects">
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
        </div> */}
        {/* <div>
            <PageSection sectionTitle='Projects' /> <br />
        </div> */}
        <div className="topSpace"></div>
        <div className="projects">
            <div className="grid">
                <div className="project9">
                    <Thumbnail internalLink ="/LGEventPro" image = "../Images/LGThum.png" title = "LG Event Pro" description = "Website re-make" technologies = "Layout | Web | SquareSpace"/>
                </div>
                <div className="project1">
                    <Thumbnail internalLink ="/PureHeroine" image = "../Images/CoverAlbumLorde.png" title = "Pure Heroine" description = "Album Cover Remake" technologies = "Photography | Layout | Illustrator"/>
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
                <div className="project7">
                    <Thumbnail internalLink ="/DD" image = "../Images/DDThum.png" title = "DD" description = "Watch with built in breathalyzer" technologies = "Wire Framing | UI | UX"/>
                </div>
                <div className="project8">
                    <Thumbnail internalLink ="/FreshAir" image = "../Images/freshThum.png" title = "FreshAir" description = "Air-filter replacement service" technologies = "Wire Framing | UI | UX"/>
                </div>
                <div className="project9">
                    <Thumbnail internalLink ="/Spark" image = "../Images/sparkThum.png" title = "Spark Magazine" description = "Layouts for student run fashion magazine" technologies = "Layout | Publishing | InDesign"/>
                </div>
                <div className="project10">
                    <Thumbnail internalLink ="/UTAOFA" image = "../Images/UTAOFAThum.png" title = "UTAOFA" description = "Poster for the School of Architecture" technologies = "Poster | Typography | Graphics"/>
                </div>
                {/* <div className="project11">
                    <Thumbnail internalLink ="/Terry" image = "../Images/1323Thum2.png" title = "Terry" description = "Building Exterior + Wayfinding" technologies = "Presentation | Wayfinding | Team | Mockups"/>
                </div> */}
            </div>
        </div>
    </div> 
    )
}

const ImageComponent = (props:{ regularImg: any, hoverImg: any }) => {
    const [logo, changeLogo] = useState(props.regularImg)

    const updateLogo = (newLogo:any) => {
        changeLogo(newLogo);
    }

    return (
        <div id="log">
            <img onMouseEnter={() => updateLogo(props.hoverImg)} onMouseLeave={() => updateLogo(props.regularImg)} src={logo}></img>
        </div>
    );
}

const Main = () => 
{

    return (
            <BrowserRouter>  
        <div>
            <div className ="topNavigation">
                <div className="navbar">
                    <Link to='/'><ImageComponent hoverImg={logoHover} regularImg={logo} /></Link>
                </div>
                <div></div>
                <div className="primaryNav">
                    <div className="mainLinks">
                        <Link className="headerContentLink" to='/about'><p> Me </p></Link>
                        <Link className="headerContentLink" to='/'><p> Work </p></Link>
                        <Link className="headerContentLink" to='/MessageForm'><p> Say Hello </p></Link>
                    </div>
                        <a href= '../Images/Rincon_Resume.pdf' target='_blank'> Resume </a>
                </div>
            </div>
            <div className="mainContent"> 
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={Me} />
                        <Route path="/Terry" component={Terry} />
                        <Route path="/TLN" component={TLN} />
                        <Route path="/Ergo" component={Ergo} />
                        <Route path="/John" component={John} />
                        <Route path="/DD" component={DD} />
                        <Route path="/Methods" component={Methods} />
                        <Route path="/MessageForm" component={MessageForm} />
                        <Route path="/Chardonnay" component={Chardonnay} />
                        <Route path="/FreshAir" component={FreshAir} />
                        <Route path="/PureHeroine" component={PureHeroine} />
                        <Route path="/Spark" component={Spark} />
                        <Route path="/UTAOFA" component={UTAOFA} />
                        <Route path="/LGEventPro" component={LG} />
                    </div> 
                    <div className="endNavigation">
                        <div className="endLinks">
                            <h1>Lets connect</h1>
                            <div className="endIcons">
                            <Link to='/MessageForm'><img src="./Images/socialIcons/mail.png"></img></Link>
                            <a href="https://www.linkedin.com/in/manuela-rincon-creative/"><img src="./Images/socialIcons/linkedIn.png"></img></a>
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

ReactDOM.render(
    <Main />,
    document.getElementById("reactPortfolio")
);