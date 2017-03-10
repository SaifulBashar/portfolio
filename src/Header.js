import React, {Component} from 'react';
import './App.css';

function Header(props) {

    const contact = {
        Email: ["#", "robal.bashar59@gmail.com"],
        Github: ["https://github.com/saiful619945", "saiful619945"],
        NPM: ["https://www.npmjs.com/~saiful619945", "saiful619945"],
        Twitter: ["https://twitter.com/Saiful__bashar", "@Saiful__bashar"]
    };

    const skills = {
        Strong: "Javascript, HTML ,React, ES6, Express, Git, Bootstrap, Jquery",
        Knowledgeable: "PHP(CodeIgniter)"
    };

    var strongSkill = (skills)=>{return skills["Strong"]};
    var knowledgeableSkill = (skills)=>{return skills["Knowledgeable"]}

    return (
        <div className="header">
            <div className="name">
                <h1>
                    Md.Saiful Bashar
                </h1>
                <small >Web Developer</small>
            </div>
            <div className="contact">
                <ul className="list-inline">
                    {
                        Object.keys(contact).map(function (key) {
                            return <li><a href={contact[key][0]}>{key} <span>{contact[key][1]}</span></a></li>;
                        })
                    }

                </ul>
            </div>
            <br/>
            <br/>
            <div className="skill">
                <h1>Technical Skills</h1>
                <p className="whiteFont">Strong: <span>{strongSkill(skills)}</span></p>
                <p className="whiteFont">Knowledgeable: <span>{knowledgeableSkill(skills)}</span></p>
            </div>

        </div>
    );

}

export default Header;
