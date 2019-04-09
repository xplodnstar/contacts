import React, { Component } from 'react';
import data from './serenity.json'
import './list.css';

class List extends Component {




    render() {
        return (
            <div className="contacts">
                <div className="title">Crew and Associates</div>
                <ul>
                    {
                        data.map(character => (
                            <li><img src={this.props.match.params.picture.thumbnail} /><p>{this.props.match.params.name.first} {this.props.match.params.name.last}</p><hr></hr>
                            </li>
                        ))
                    }
                </ul>
            </div >
        )
    }
}

export default List