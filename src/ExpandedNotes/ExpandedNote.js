import React from "react";
import Link from "react-router-dom";

export default function ExpandedNote(props) {
  console.log(props);
  return (
    <div>
      <h1 value="noteful">Noteful</h1>
      <div>
        <p>{props.note.name}</p>
        <p>{props.note.modified}</p>
        <button value="Delete Note">Delete Note</button>
      </div>
      <p>{props.note.content}</p>
      <button value="Go Back"></button>
      <p></p>
    </div>
  );
}
