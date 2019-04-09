import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contacts">
                <div className="picFrame"><img src={this.props.match.params.picture.large} /></div>
                <div className="dataBox"><h2>{this.props.match.params.name.title}</h2></div>
                <div className="dataBox"><h1>{this.props.match.params.name.first} {this.props.match.params.name.last}</h1></div>
                <hr></hr>
                <div className="dataBox"><p>{this.props.match.params.email}</p></div>
                <hr></hr>
                <div className="dataBox"><p>{this.props.match.params.phone}</p></div>
                <hr></hr>
                <div className="dataBox"><p>{this.props.match.params.cell}</p></div>
                <hr></hr>
                <div className="dataBox"><p>{this.props.match.params.location.city}, {this.props.match.params.location.state}</p></div>
            </div >
        )
    }
}

export default Contact