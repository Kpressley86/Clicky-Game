import React from "react";
import "./Wrapper.css";

const Wrapper = props => (

    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
            <div className="overlay">
                <div className="text">
                    <br/>
                    {props.year}
                    <br/>
                    {props.name}
                    <br/>
                    {props.faction}
                    <br/>
                    {props.job}
                    <br/>
                </div>
            </div>
        </div>
    </div>
);

export default Wrapper;