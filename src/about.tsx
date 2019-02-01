import * as React from 'react';
import {Link} from 'react-router-dom';
import {PageSection} from './Components/pageSections';
import './Styles/aboutStyles.css';

export class Me extends React.Component {
    render() {
        return (
            <div className="pageColor">
                <PageSection sectionTitle='Hello!' /> <br />

                <div className="content">
                    <p>
                    My name is Manuela and I am a designer with front-end language skills. <br />
                    I got my degree in Design in 2017 from The University of Texas at Austin, Hook-em.
                    <br/> <br />
                    Currently self-teaching programming with a little help from my full-stack developer father. <br />
                    You can check out some of my coding projects and how I built this website on my 
                    <a href ="https://github.com/manuelarincon/Portfolio" > GitHub.</a>
                    <br /> <br />
                    When I’m not working, learning something new or taking a nap you can find me either reading at local coffee shop, the movies,
                    with family or planing a future trip. One of my goals is to see as much of the world as I can and would love any suggestions on 
                    cool and noteworthy places you have experienced. I’m a bit of a daredevil and have gone skydiving and paragliding so don’t 
                    hesitate in sending me
                    <Link to='/MessageForm'> your recommendations! </Link>
                    I can also propose some ideas, just let me know 
                    <Link to='/MessageForm'> what kind of trips you like. </Link>
                    <br /> <br />
                    Looking for inspiration? Here are a couple of my favorite 
                    <a href ="https://paper.dropbox.com/doc/Some-awesome-humans--AWnHdhSIJ6tfnG4ZVnAWXkKhAQ-qc7AKJv0obE7H5fYc90WQ" target="_new"> people </a> 
                    I draw creativity and motivation from.
                    <br /> <br />
                    Interested in working together? 
                    <Link to='/MessageForm'> Drop me a line.</Link>
                    </p>
                </div>
            </div>
        )
    }
}


// https://paper.dropbox.com/doc/Some-awesome-humans--AWnHdhSIJ6tfnG4ZVnAWXkKhAQ-qc7AKJv0obE7H5fYc90WQ