import lunch from '../images/lunch.png'

const Lunch = () => {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='card mb-3 '>
        <div className='row g-0'>
          <div className='m-auto col-3 col-md-4'>
            <img src={lunch} alt='lunch' className='img-fluid' />
          </div>
          <div className='m-auto  col-9 col-md-8'>
            <div className='card-body'>
              <h5 className='fs-1 fw-bold'>LUNCH</h5>
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
            <td className='fw-bold'>
              Fish fillet with rice / Mashed potatoes with vegetables
            </td>
            <td>$4.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>
              Chicken steak with rice / Mashed potatoes
            </td>
            <td>$3.9</td>
          </tr>
          <tr>
            <td className='fw-bold'>Chicken Curry + Rice or Jabati</td>
            <td>$3.9</td>
          </tr>
          <tr>
            <td className='fw-bold'>Fish Curry + Rice or Jabati</td>
            <td>$4.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Lunch
