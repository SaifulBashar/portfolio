import React from 'react';
import './App.css';
const temp=(link,name,dis)=>{
    return(
        <li>
            <a href={link}>{name}</a>
            <br/>
            <p>{dis}</p>
        </li>
    );
}
const Project1=()=>{
    const npmLink1 = "https://www.npmjs.com/package/bangladesh-areacode";
    const npmLink2 = "https://www.npmjs.com/package/dhaka-division-post-code"
    return(
        <div className="openSource">
            <h2>
                Opensource contribution
            </h2>
            <h5>
                NPM package
            </h5>
            <ul>
                {temp(npmLink1,`bangladesh-areacode`,`Get Nation Wide Dialing (NWD) Codes in Bangladesh`)}
                {temp(npmLink2,`dhaka-division-post-code`,`A small node module to find postal code of different area in Dhaka division`)}
            </ul>
        </div>
    );
}

const Project2=()=>{
    const gitLink1 = "https://github.com/saiful619945/chat-room-app";
    const gitLink2 = "https://saiful619945.github.io/React-clock/";
    const gitLink3 = "https://github.com/saiful619945/cplusplus-editor";
    const gitLink4 = "https://github.com/saiful619945/courier_delivery_service";

    return(
        < div className = "pro1" >
        <ul>
            {temp(gitLink1,`chat-room-app(ExpressJS)`,`Small chatroom app where user can create chatroom, add member
             , post member.ExpressJS is used in the project`)}
            {temp(gitLink2,`React-clock(ReactJS)`,`React-clock show time from local machine`)}
            {temp(gitLink3,`cplusplus-editor(C#)`,`Its a text editor for C,C++. It is a academic project.`)}
            {temp(gitLink4,`courier_delivery_service`,`Basic PHP project. Try to orginize code in MVC pattern`)}
        </ul>
        < /div>
    );
}

function Work(props){
    return(
        <div className="location work">
            <Project1/>
            <h2>
                Other project
            </h2>
            <Project2/>
        </div>
    );
}
export default Work;
