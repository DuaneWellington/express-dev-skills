// PATH: 'src/pages/Skills.jsx'

import React, {useState, useEffect } from "react";
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import "../styles/Skills.css"
import skillsData from "../assets/skills.json"

function Skills() {
    useScrollToTop();

    return (
        <div className="skills-container">
            {skillsData.map((skill) => ( 
            <SkillCard key={skill.id} {...skill} />
            ))}
        </div>
    );
}

const SkillCard = ({ name, description, image }) => (
    <div className="skill-card">
        <img src={image} alt={name} className="skill-image" />
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
);

export default Skills;