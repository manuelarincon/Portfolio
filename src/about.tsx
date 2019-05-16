import * as React from 'react';
import {Link} from 'react-router-dom';
import {PageSection} from './Components/pageSections';
import './Styles/aboutStyles.css';

export class Me extends React.Component {
    render() {
        return (
            <div className="pageColor">
            <div className="topSpaceAbout"></div>
                <div className="content">
                    <p>
                    <h1>Hello hello</h1> <br/><br/>
                    My name is Manuela and I am a designer with front-end language skills. <br />
                    I got my degree in Design in 2017 from The University of Texas at Austin, Hook-em.
                    <br/> <br />
                    Currently I'm expanding on my programing capacities and will be improving this site on a consistent basis. <br />
                    You can check out some of my coding projects and how I built this website on my 
                    <a href ="https://github.com/manuelarincon/Portfolio" > GitHub.</a>
                    <br /> <br />
                    When I’m not working, learning something new or taking a nap you can find me either reading at local coffee shop, the movies,
                    with family or planing a future trip. One of my goals is to see as much of the world as I can and would love any suggestions on 
                    cool and noteworthy places you have experienced. I’m a bit of a daredevil and have gone skydiving and paragliding so don’t 
                    hesitate in sending me 
                    <Link to='/MessageForm'> your recommendations! </Link>
                    &nbsp;I can also propose some ideas, just let me know 
                    <Link to='/MessageForm'> what kind of trips you like. </Link>
                    <br /> <br />
                    Looking for inspiration? Here are a couple of my 
                    <a href ="https://paper.dropbox.com/doc/Some-awesome-humans--AWnHdhSIJ6tfnG4ZVnAWXkKhAQ-qc7AKJv0obE7H5fYc90WQ" target="_new"> favorite people </a> 
                    I draw creativity and motivation from.
                    <br /> <br />
                    Interested in working together? 
                    &nbsp;<Link to='/MessageForm'>Hit me up.</Link>
                    </p>
                </div>
            </div>
        )
    }
}


// https://paper.dropbox.com/doc/Some-awesome-humans--AWnHdhSIJ6tfnG4ZVnAWXkKhAQ-qc7AKJv0obE7H5fYc90WQ