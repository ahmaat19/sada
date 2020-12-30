import pizza from '../images/pizza.png'

const Pizza = () => {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='card mb-3 '>
        <div className='row g-0'>
          <div className='m-auto col-3 col-md-4'>
            <img src={pizza} alt='pizza' className='img-fluid' />
          </div>
          <div className='m-auto  col-9 col-md-8'>
            <div className='card-body'>
              <h5 className='fs-1 fw-bold'>PIZZA</h5>
            </div>
          </div>
        </div>
      </div>
      <table className='table text-light'>
        <thead>
          <tr>
            <td scope='col'></td>
            <td scope='col'>Small</td>
            <td scope='col'>Medium</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='fw-bold'>Chicken Pizza</td>
            <td>$6.9</td>
            <td>$9.9</td>
          </tr>
          <tr>
            <td className='fw-bold'>Tuna Pizza</td>
            <td>$6.9</td>
            <td>$9.9</td>
          </tr>
          <tr>
            <td className='fw-bold'>Meat Pizza</td>
            <td>$6.9</td>
            <td>$9.9</td>
          </tr>
          <tr>
            <td className='fw-bold'>
              Margarita <span className='fw-lighter'>(cheese)</span> Pizza
            </td>
            <td>$6.9</td>
            <td>$9.9</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Pizza
