import React from 'react';

const Course = (props) => {
  return (
    <div className="course">
      <h3 className="course__headline">{props.name}</h3>
      <div className={`course__picture ${props.img}`}></div>
      <p className="course__text">{props.text}</p>
    </div>
  );
};

export default Course;
