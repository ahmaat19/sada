import title from '../images/title-separator.png'
import recipes1 from '../images/recipes1.jpg'

const Recipes = () => {
  return (
    <div className='container-fluid bg-fluid'>
      <div
        className='container py-5'
        id='recipes'
        data-aos='fade-left'
        data-aos-duration='2000'
      >
        <div className='text-center pt-5 text-light'>
          <h2 className='display-5 section-title text-light'>RECIPES</h2>
          <img src={title} alt='title separator' className='img-fluid' />
          <p>
            Lorem ipsum dolor sit amet, at inani nobis meliore ius, id vix movet
            scaevola mandamus. Adhuc iusto ocurreret quo nete
          </p>
        </div>

        <div className='row gy-5'>
          <div className='col-md-6 mx-auto'>
            <img src={recipes1} alt='The Rocking Grill' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <h1 className='display-3'>The Rocking Grill</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
            <p className='fw-light'>
              Diceret civibus mnesarchum te sea. Te has hinc forensibus, te
              dicunt denique vix. Ei sed vidit brute. Solet tantas mel ei. An
              vim autem lucilius tacimates, an eos decore urbanitas, harum
              splendide mediocritatem cum ei.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes
