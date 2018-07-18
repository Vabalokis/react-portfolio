import React from "react";
import "./Project.css";

const project = props => {
  let value;

  if (props.tags) {
    value = props.tags.map((tag, i) => (
      <li className="tag" key={i}>
        {tag}
      </li>
    ));
  }

  return (
    <div className="Project">
      <h3>
        <b>{props.name}</b>
      </h3>
      <p>
         {props.description}
      </p>
      <p>
        <i>{props.reason}</i>
      </p>
      <div className="piccont"> 
      <img src={props.picture_URL} />

      <div className="lft"> 
      <a className="right" href={props.demo_URL} target="_blank">
        <i className="fa fa-desktop fa-3x" />
      </a>
       </div>
      <div className="rgt"> 
      <a className="left" href={props.git_URL} target="_blank">
        <i className="fa fa-git fa-3x" />
      </a>
       </div>

      </div>  

      <ul><b>{value}</b></ul>

    </div>
  );
};

export default project;
