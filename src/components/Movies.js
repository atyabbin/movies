import React from 'react';
import '../App.css';

export default function Movies(props) {
  return (
    <div className="space">
      <img src={props.img} className="image" />
      <p>Title: {props.title}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}
