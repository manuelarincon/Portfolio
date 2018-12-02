import * as React from 'react';
import './Styles/messageFormStyles.css';

export class MessageForm extends React.Component {

    state = {sent: false}

    handleSubmit = () => {

        console.log('From has been submitted');
        this.setState({ sent: true});
    }

    render() {

        if (this.state.sent == true) {
            return(
                <div className="submitted">
                    <p>You Sent Mail</p>
                </div>
            )
        }

        else {
            return (
                <div className="messageForm">
                    <div>
                    </div>
                    <form onSubmit={this.handleSubmit} className="form" action="http://localhost:52280/api/Comment/getData" method="get">
                        <input placeholder="What is your name?" type="text" name="name" /> <br /> <br />
                        <input placeholder="What is your email?" type="text" name="email" /> <br /> <br />
                        <input placeholder="Message topic" type="text" name="topic" /> <br /> <br />
                        <textarea placeholder="Your message" name="message" /> <br /> <br />
                        <button>Sent Message</button>
                    </form>
                </div>
            )
        }
    }
    
};


{/* <form onSubmit={handleSubmit} className="form" action="http://localhost:52280/api/Comment/getData" method="get"></form> */}