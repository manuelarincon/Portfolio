import * as React from 'react';
import './Styles/messageFormStyles.css';
import axios from 'axios';

export const MessageForm = () => {

    const [formState, setFormState] = React.useState({
        name: "",
        email: "",
        topic: "",
        message: "",
        sent: false
    })

    const [sent, setSentState] = React.useState(false);

    const handleSubmit = () => {
        console.log('From has been submitted');
        axios.get(`https://trainingrestapi.azurewebsites.net/Api/Values/email?name=${formState.name}&&email=${formState.email}&&topic=${formState.topic}&&message=${formState.message}`);
        setSentState(true);
    }

    let returnedForm = null;
    if (sent) {
        returnedForm = <div className="submitted">
                            <div className="topSpace"></div>
                            <p>You Sent Mail</p>
                        </div>
    }
    else {
        returnedForm = <div className="blueBackGround">
                        <div className="topSpaceMessage"></div>
                            <div className="messageForm">
                                <div>
                                </div>
                                <form onSubmit={handleSubmit} className="form" action="" method="get">
                                    <input onChange={ (e) => setFormState(Object.assign(formState, { name: e.currentTarget.value }))} placeholder="What is your name?" type="text" name="name" /> <br /> <br />
                                    <input onChange={ (e) => setFormState(Object.assign(formState, { email: e.currentTarget.value }))} placeholder="What is your email?" type="text" name="email" /> <br /> <br />
                                    <input onChange={ (e) => setFormState(Object.assign(formState, { topic: e.currentTarget.value }))} placeholder="Message topic" type="text" name="topic" /> <br /> <br />
                                    <textarea onChange={ (e) => setFormState(Object.assign(formState, { message: e.currentTarget.value }))} placeholder="Your message" name="message" /> <br /> <br />
                                    <button>Deliver</button>
                                </form>
                            </div>
                            <div className="bottomSpace"></div>
                        </div>
    }

    return returnedForm
};


{/* <form onSubmit={handleSubmit} className="form" action="http://localhost:52280/api/Comment/getData" method="get"></form> */}