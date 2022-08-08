import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
  return (
<React.Fragment>
        <section className='add-contact p-3'>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h4 text-primary fw-bold">Edit Contact</p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Esse, nihil commodi id eveniet ipsum odio inventore eos atque fugiat? 
                  Delectus ullam eveniet, aut animi deleniti id odit minus repudiandae commodi.
                </p>
              </div>
              <div className='row align-items-center'>
                <div className='col-md-4'>
                  <form>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Photo Url' />
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Mobile' />
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Email' />
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Company' />
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Title' />
                    </div>
                    <div className="mb-2">
                      <select className='form-control'>
                        <option value=''>Select a Group</option>
                      </select>
                    </div>
                    <div className="mb-2">
                      <input type='submit' className='btn btn-primary' value='Update' />
                      <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img src="https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png" alt="user" className='contact-img'/>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}

export default EditContact