import React from 'react'
import Navbar from './component/Navbar';
import './component/navbar.css'

const App = () => {
  return (
    <>
      {/* navbar */}
      <Navbar/>
      {/* <nav>
        <h1>Tarun</h1>
        <ul>
          <a href="#home"><li>Home</li></a>
          <a href="#skill"><li>Skill</li></a>
          <a href=""><li>Tools</li></a>
          <a href=""><li>About me</li></a>
        </ul>
      </nav> */}

      {/* home */}
      <section id='home'>
        <div className="container">
          <div className="info">
            <h1>Hii</h1>
            <h1>I m Tarun, a</h1>
            <h1>Web Developer</h1>
            <a href="#project">
              <button>See My Project</button>
            </a>
          </div>
          <div className="img">
            <img src="/profile_photo1.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* Project */}
      <section id='project'>
        <div className="project">
          <h1 className='heading'>Projects</h1>
          <div className="p-container">
          {/* 1 */}
            <div className="card-img">
              <img src="/dice.png" alt="#dice-project" />
              <a href="https://dice-game-mu-peach.vercel.app/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>
              {/* 2 */}
            <div className="card-img">
              <img src="/todo.png" alt="#dice-project" />
              <a href="https://tarunbharti7.github.io/To-do-list-with-vanila-javascript/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>
            {/* 3 */}
            <div className="card-img">
              <img src="/landing.png" alt="#dice-project" />
              <a href="https://tarunbharti7.github.io/Website-landing-page-using-flexbox/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>
            {/* 4 */}
            <div className="card-img">
              <img src="/password.png" alt="#dice-project" />
              <a href="https://password-generator-khaki-one.vercel.app/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>
            {/* 5 */}
            <div className="card-img">
              <img src="/pokemon.png" alt="#dice-project" />
              <a href="https://tarunbharti7.github.io/pokemon-api-fetching/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>

            {/* 6 */}
            <div className="card-img">
              <img src="/game.png" alt="#dice-project" />
              <a href="https://tarunbharti7.github.io/stone-paper-scissor-Game/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>

            {/* 7 */}
            <div className="card-img">
              <img src="/video.png" alt="#dice-project" />
              <a href="https://tarunbharti7.github.io/videos-play-and-pause/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>

            {/* 8 */}
            <div className="card-img">
              <img src="/lodge.png" alt="#dice-project" />
              <a href="https://tarunbharti7.github.io/LodgeM5-website/" target='_blank'>
                <button>Demo</button>
              </a>
            </div>
            
          </div>
        </div>
      </section>

    </>
  )
}

export default App