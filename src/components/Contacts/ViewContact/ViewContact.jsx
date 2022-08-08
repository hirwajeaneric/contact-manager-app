import React from 'react'
import { Link } from 'react-router-dom'

const ViewContact = () => {
  return (
    <React.Fragment>
        <section className='view-contact-intro'>
          <div className='container'>
            <div className='row'>
              <div className='col p-3'>
                <p className='h3 text-warning fw-bold'>View Contact</p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Laudantium repellat fugiat veniam tenetur sed nulla magnam laborum 
                  recusandae doloremque facere perferendis labore fugit quod 
                  reprehenderit quisquam provident odio, numquam at.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="view-contact mt-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
              <img src='https://www.awicons.com/free-icons/download/application-icons/dragon-soft-icons-by-artua.com/png/512/User.png' alt='' className='contact-img'/>
              </div>
              <div className="col-md-8">
                <ul className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    Name : <span className='fw-bold'>Rajan</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Mobile : <span className='fw-bold'>07806872323</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Email : <span className='fw-bold'>minerve@gmail.com</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Company : <span className='fw-bold'>minerve@gmail.com</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Title : <span className='fw-bold'>minerve@gmail.com</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Group : <span className='fw-bold'>minerve@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className='col'>
                  <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}

export default ViewContact