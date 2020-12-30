import title from '../images/title-separator.png'
import pizza from '../images/pizza.png'
import burgers from '../images/burgers.png'
import drinks from '../images/drinks.png'
import lunch from '../images/lunch.png'
import snack from '../images/snacks.PNG'
import Pizza from './Pizza'
import Drinks from './Drinks'
import Burgers from './Burgers'
import Lunch from './Lunch'
import Snacks from './Snacks'
import ourmenu from '../images/sada-menu.jpg'

const Menu = () => {
  return (
    <div className='container-fluid bg-fluid '>
      <div
        className='container py-5'
        id='menu'
        data-aos='fade-right'
        data-aos-duration='2000'
      >
        <div className='text-center pt-5 text-light'>
          <h2 className='display-5 section-title text-light'>MENU</h2>
          {/* <img src={title} alt='title separator' className='img-fluid' /> */}
          <a
            href={ourmenu}
            target='blank'
            className='btn btn-outline-light mb-3'
          >
            <i className='fa fa-download'></i> Download Our Menu
          </a>
          <p>Just Choose From The Best</p>
        </div>

        <div className='row text-light'>
          <div className='col-md-2  mx-auto'>
            <div className='card bg-transparent border-0'>
              <img
                src={pizza}
                className='card-img-top bg-light rounded-pill w-75 p-3 mx-auto'
                alt='pizza'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>PIZZA</h5>
              </div>
            </div>
          </div>

          <div className='col-md-2  mx-auto'>
            <div className='card bg-transparent border-0'>
              <img
                src={burgers}
                className='card-img-top bg-light rounded-pill w-75 p-3 mx-auto'
                alt='burgers'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>BURGERS</h5>
              </div>
            </div>
          </div>

          <div className='col-md-2  mx-auto'>
            <div className='card bg-transparent border-0'>
              <img
                src={lunch}
                className='card-img-top bg-light rounded-pill w-75 p-3 mx-auto'
                alt='lunch'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>LUNCH</h5>
              </div>
            </div>
          </div>

          <div className='col-md-2  mx-auto'>
            <div className='card bg-transparent border-0'>
              <img
                src={drinks}
                className='card-img-top bg-light rounded-pill w-75 p-3 mx-auto'
                alt='drinks'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>DRINKS</h5>
              </div>
            </div>
          </div>

          <div className='col-md-2  mx-auto'>
            <div className='card bg-transparent border-0'>
              <img
                src={snack}
                className='card-img-top bg-light rounded-pill w-75  p-3 mx-auto'
                alt='snack'
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>SNACK & DRINKS</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='row gy-3'>
          <Pizza />
          <Burgers />
          <Lunch />
          <Drinks />
          <Snacks />
        </div>
      </div>
    </div>
  )
}

export default Menu
