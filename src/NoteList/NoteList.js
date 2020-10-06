import React from 'react';
import {Link } from 'react-router-dom'


export default function NoteList(props) {
    return (
        <div>
        <p>Notes List</p>
        <ul className="notes-list">
            {props.notes.map(item =>
                <li key={item.id}>
                    <Link to={`/note/${item.id}`}>
                        {item.name}
                    </Link>
                    <p>
                        {item.modified}
                    </p>
                </li>)}
        </ul>
        </div>
    )
}