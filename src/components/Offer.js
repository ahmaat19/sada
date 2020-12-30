import title from '../images/title-separator.png'
import offer1 from '../images/offer1.jpg'
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer3.jpg'
import offer4 from '../images/offer4.jpg'
import offer5 from '../images/offer5.jpg'
import offer6 from '../images/offer6.jpg'

const Offer = () => {
  return (
    <div
      className='container py-5'
      id='offer'
      data-aos='fade-right'
      data-aos-duration='2000'
    >
      <div className='text-center pt-5 '>
        <h2 className='display-5 section-title '>The Best From Our Offer</h2>
        <img src={title} alt='title separator' className='img-fluid' />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
        </p>
      </div>

      <div className='row'>
        <div className='col-md-4'>
          <div className='card text-center bg-transparent border-0'>
            <img
              src={offer1}
              className='card-img-top w-50 mx-auto'
              alt='standard'
            />
            <div className='card-body'>
              <h5 className='card-title fs-1 fw-bold'> $5 </h5>
              <h5 className='fw-light fs-1'>Standard</h5>
              <p className='card-text fs-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card text-center bg-transparent border-0'>
            <img
              src={offer2}
              className='card-img-top w-50 mx-auto'
              alt='standard'
            />
            <div className='card-body'>
              <h5 className='card-title fs-1 fw-bold'> $2 </h5>
              <h5 className='fw-light fs-1'>Standard</h5>
              <p className='card-text fs-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card text-center bg-transparent border-0'>
            <img
              src={offer3}
              className='card-img-top w-50 mx-auto'
              alt='standard'
            />
            <div className='card-body'>
              <h5 className='card-title fs-1 fw-bold'> $6 </h5>
              <h5 className='fw-light fs-1'>Standard</h5>
              <p className='card-text fs-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card text-center bg-transparent border-0'>
            <img
              src={offer4}
              className='card-img-top w-50 mx-auto'
              alt='standard'
            />
            <div className='card-body'>
              <h5 className='card-title fs-1 fw-bold'> $1 </h5>
              <h5 className='fw-light fs-1'>Standard</h5>
              <p className='card-text fs-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card text-center bg-transparent border-0'>
            <img
              src={offer5}
              className='card-img-top w-50 mx-auto'
              alt='standard'
            />
            <div className='card-body'>
              <h5 className='card-title fs-1 fw-bold'> $12 </h5>
              <h5 className='fw-light fs-1'>Standard</h5>
              <p className='card-text fs-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card text-center bg-transparent border-0'>
            <img
              src={offer6}
              className='card-img-top w-50 mx-auto'
              alt='standard'
            />
            <div className='card-body'>
              <h5 className='card-title fs-1 fw-bold'> $8 </h5>
              <h5 className='fw-light fs-1'>Standard</h5>
              <p className='card-text fs-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
