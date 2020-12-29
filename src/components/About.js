import React from 'react'
import title from '../images/title-separator.png'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'

const About = () => {
  return (
    <div
      className='container pt-5 text-light'
      id='service'
      data-aos='fade-right'
      data-aos-duration='2000'
    >
      <div className='text-center pt-5'>
        <h2 className='display-5 section-title'>HAVE IT YOUR WAY</h2>
        <img src={title} alt='title separator' />
        <p className='pt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      <div class='row text-center'>
        <div class='col-md-4'>
          <div class='card bg-transparent border-0'>
            <img src={banner1} class='card-img-top rounded' alt='...' />
            <div class='card-body'>
              <h5 class='card-title section-title'>Barbeque</h5>
              <p class='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div class='col-md-4'>
          <div class='card bg-transparent border-0'>
            <img src={banner2} class='card-img-top rounded' alt='...' />
            <div class='card-body'>
              <h5 class='card-title section-title'>Bon Appetit</h5>
              <p class='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div class='col-md-4'>
          <div class='card bg-transparent border-0'>
            <img src={banner3} class='card-img-top rounded' alt='...' />
            <div class='card-body'>
              <h5 class='card-title section-title'>Vegetables</h5>
              <p class='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
