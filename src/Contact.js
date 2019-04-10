import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaPassport } from 'react-icons/fa';
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
        state: '',
        user: '',
        pass: ''
    }

    getCharacter = (id) => {
        const character = data.find(character => {
            return character.id === Number(id)
        })

        this.setState({
            id: character.id,
            title: character.name.title,
            first: character.name.first,
            last: character.name.last,
            email: character.email,
            picture: character.picture.large,
            thumbnail: character.picture.thumbnail,
            phone: character.phone,
            cell: character.cell,
            city: character.location.city,
            states: character.location.state,
            user: character.login.username,
            pass: character.login.password
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
                <div className="picFrame"><Link to="/" className="arrow"><FaArrowLeft /></Link><img src={this.state.picture} alt="" /></div>
                <div className="dataBox"><h2>{this.state.title}</h2></div>
                <div className="dataBox"><h1>{this.state.first} {this.state.last}</h1></div>
                <hr></hr>
                <div className="dataBox"><p><FaAt />          {this.state.email}</p></div>
                <hr></hr>
                <div className="dataBox"><p><FaPhone />          {this.state.phone}</p></div>
                <hr></hr>
                <div className="dataBox"><p><FaMobile />          {this.state.cell}</p></div>
                <hr></hr>
                <div className="dataBox"><p><FaGlobeAmericas />          {this.state.city}, {this.state.states}</p></div>
                <hr></hr>
                <div className="dataBox"><p><FaUser />          {this.state.user}</p></div>
                <hr></hr>
                <div className="dataBox"><p><FaPassport />          {this.state.pass}</p></div>
                <hr></hr>
            </div >
        )
    }
}

export default Contact