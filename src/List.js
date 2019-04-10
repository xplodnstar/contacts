import React from 'react';
import { Link } from 'react-router-dom';
import data from './serenity.json'
import './list.css';

const List = props => (
    <div className="contacts">
        <ul>
            <li className="title">Crew and Associates</li>
            {
                data.map(character => (
                    <li key={"character" + character.id}><img src={character.picture.thumbnail} alt="" /><Link to={"/Contact/" + character.id} className='link'>{character.name.first} {character.name.last}</Link><hr className="listLine"></hr>
                    </li>
                ))
            }
        </ul>
    </div>
)



export default List