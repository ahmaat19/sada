import burgers from '../images/burgers.png'

const Burgers = () => {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='card mb-3 '>
        <div className='row g-0'>
          <div className='m-auto col-3 col-md-4'>
            <img src={burgers} alt='pizza' className='img-fluid' />
          </div>
          <div className='m-auto  col-9 col-md-8'>
            <div className='card-body'>
              <h5 className='fs-1 fw-bold'>BURGERS</h5>
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
            <td className='fw-bold'>Chicken Burger</td>
            <td>$4.0</td>
          </tr>
          <tr>
            <td className='fw-bold'>Crispy Chicken Burger</td>
            <td>$4.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Beef Burger</td>
            <td>$4.5</td>
          </tr>
          <tr>
            <td className='fw-bold'>Double Beef Burger</td>
            <td>$5.9</td>
          </tr>
          <tr>
            <td className='fw-bold'>Tuna Cheese Sandwich</td>
            <td>$3.0</td>
          </tr>
          <tr>
            <td className='fw-bold'>Chicken Wrap</td>
            <td>$3.0</td>
          </tr>
          <tr>
            <td className='fw-bold'>French Fries</td>
            <td>$1.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Burgers
