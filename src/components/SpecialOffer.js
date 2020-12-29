import title from '../images/title-separator.png'
import burger from '../images/burger.png'

const SpecialOffer = () => {
  return (
    <>
      <div className='container-fluid bg-fluid'>
        <div
          className='container py-5'
          id='specialOffer'
          data-aos='fade-left'
          data-aos-duration='2000'
        >
          <div className='text-center pt-5 text-light'>
            <h2 className='display-5 section-title text-light'>
              SPECIAL OFFER
            </h2>
            <img src={title} alt='title separator' className='img-fluid' />
          </div>

          <div class='row text-light'>
            <div class='col-md-6 my-auto'>
              <h1 class='display-4'>Special Offer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas in quam libero quidem praesentium voluptatum? Veritatis
                tempora, totam labore possimus numquam distinctio nihil, minus
                sit doloribus aliquam aperiam deleniti quidem.
              </p>
              <h1 class='display-1'>$9.90</h1>
              <span>Double Cheese</span>
              <span>Triple Cheese</span>
              <span>Awesome Cheese</span>
            </div>

            <div class='col-md-6'>
              <img src={burger} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialOffer
