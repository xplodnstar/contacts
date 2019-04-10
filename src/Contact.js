import React, { Component } from 'react';
import data from './serenity.json'
import './contact.css';

class Contact extends Component {
    state = {
        title: '',
        first: '',
        last: '',
        email: '',
        picture: '',
        thumbnail: '',
        phone: '',
        cell: '',
        city: '',
        state: ''
    }

    getCharacter = (id) => {
        data.find(character => {
            return character.id === id
        })

        this.setState({
            id: data.id,
            first: data.first,
            last: data.last,
            email: data.email,
            picture: data.picture,
            thumbnail: data.thumbnail,
            phone: data.phone,
            cell: data.cell,
            city: data.city,
            states: data.state
        })
    }

    componentDidMount() {
        this.getCharacter(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id !== this.props.match.params.id) {
            this.getCharacter(newProps.match.params.id)
        }
    }

    render() {
        return (
            <div className="contacts">
                <div className="picFrame"><img src={this.state.picture} alt="" /></div>
                <div className="dataBox"><h2>{this.state.title}</h2></div>
                <div className="dataBox"><h1>{this.state.first} {this.state.last}</h1></div>
                <hr></hr>
                <div className="dataBox"><i className="fas fa-at"></i><p>     {this.state.email}</p></div>
                <hr></hr>
                <div className="dataBox"><p>{this.state.phone}</p></div>
                <hr></hr>
                <div className="dataBox"><p>{this.state.cell}</p></div>
                <hr></hr>
                <div className="dataBox"><p>{this.state.city}, {this.state.states}</p></div>
            </div >
        )
    }
}

export default Contact