import drinks from '../images/drinks.png'

const Drinks = () => {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='card mb-3 '>
        <div className='row g-0'>
          <div className='m-auto col-3 col-md-4'>
            <img src={drinks} alt='drinks' className='img-fluid' />
          </div>
          <div className='m-auto  col-9 col-md-8'>
            <div className='card-body'>
              <h5 className='fs-1 fw-bold'>DRINKS</h5>
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
            <td className='fw-bold'>Classic Iced Tea</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Peach & Mango Ice Tea</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Mojito</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Pink Lady Shake</td>
            <td>$3.0</td>
          </tr>
          <tr>
            <td className='fw-bold'>Mocha Freak Shake</td>
            <td>$3.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Oreo Freak Shake</td>
            <td>$3.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Appletiini</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Blue Lagoon</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Strawberry Cooler</td>
            <td>$2.5</td>
          </tr>
          <tr>
            <td className='fw-bold bg-light' style={{ color: '#753e29' }}>
              TEA
            </td>
            <td className='fw-bold bg-light' style={{ color: '#753e29' }}></td>
          </tr>
          <tr>
            <td className='fw-bold'>SADA Tea</td>
            <td>$1.0</td>
          </tr>
          <tr>
            <td className='fw-bold'>Love Tea</td>
            <td>$1.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Lipton Tea</td>
            <td>$1.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Drinks
