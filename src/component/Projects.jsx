import React from 'react'

const Projects = () => {
  return (
    <>
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

export default Projects