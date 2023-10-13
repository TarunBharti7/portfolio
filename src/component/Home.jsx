import React from 'react';

const Home = () => {
  return (
    <>
      <section id='home'>
        <div className="container">
          <div className="info">
            <h1>Hii</h1>
            <h1>I'm Tarun, a</h1>
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
    </>
  )
}

export default Home