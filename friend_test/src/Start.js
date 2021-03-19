import React from "react";
import img from "./homer.jpg"
const Start = (props) => {

    return (
        <div className="container">
            <div className = "outter">
            <img className="homer-img"src = {img} />
            <h1>나는 <span>{props.name}</span>에 대해 얼마나 알고 있을까?</h1>
            <input className="text-box" type="text" placeholder="내 이름"/>
            <button className="button">시작하기</button>
        </div>
        </div>
    );
}

export default Start;