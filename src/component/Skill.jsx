import React from 'react'

const Skill = () => {
  return (
    <>
        <h1>Skills</h1>
        <div className="skill-container">
          <div className="skill">
            <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="html" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="javascript" />
            <p>Javascript</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="tailwind" />
            <p>Tailwind</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="c" />
            <p>C</p>
          </div>
          <div className="skill">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="c++" />
            <p>C++</p>
          </div>

        </div>
    </>
  )
}

export default Skill