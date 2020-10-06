import React from "react";
import Link from "react-router-dom";

export default function ExpandedNote(props) {
  return (
    <div>
      <h1 value="noteful">Noteful</h1>
      <div>
        <p>{props.name}</p>
        <p>{props.modified}</p>
        <button value="Delete Note"></button>
      </div>
      <textarea>{props.content}</textarea>
      <button value="Go Back"></button>
      <p></p>
    </div>
  );
}
