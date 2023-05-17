import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__fontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <div className="experience__backend"></div>
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Python</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Oracle SQL</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>MySQL</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Experience