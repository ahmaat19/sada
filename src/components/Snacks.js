import snacks from '../images/snack.png'

const Snacks = () => {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='card mb-3 '>
        <div className='row g-0'>
          <div className='m-auto col-3 col-md-4'>
            <img src={snacks} alt='snacks' className='img-fluid' />
          </div>
          <div className='m-auto  col-9 col-md-8'>
            <div className='card-body'>
              <h5 className='fs-4 my-0 fw-bold'>SNACKS & SWEETS</h5>
            </div>
          </div>
        </div>
      </div>
      <table className='table text-light'>
        <thead>
          <tr>
            <td scope='col'></td>
            <td scope='col'>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='fw-bold'>Oreo Cheese Cake</td>
            <td>$3.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Coconut Chocolate Rolls</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Chocolate Brownie</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Coconut Bounty Cake</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Caramel Cake</td>
            <td>$3.0</td>
          </tr>
          <tr>
            <td className='fw-bold'>Oreo Treat</td>
            <td>$1.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Snacks
