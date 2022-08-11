import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';

const EditContact = () => {

  let navigate = useNavigate();
  
  let {contactId} = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: '',
      photo: '',
      mobile: '',
      email: '',
      company: '',
      title: '',
      groupId: ''
    },
    groups: [],
    errorMessage: ''
  });

  useEffect(async ()=>{
    try {
      setState({...state, loading: true});
      let response = await ContactService.getContact(contactId);
      let groupResponse = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        contact: response.data,
        groups: groupResponse.data
      })
    } catch (error) {
      setState({
        ...state, 
        loading: false,
        errorMessage: error.message
      })
    }
  },[]);

  let updateInput = (event)=> {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name] : event.target.value
      }
    });
  }

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(state.contact, contactId);
      if(response) {
        navigate('/contacts/list', {replace: true});
      }
    } catch (error) {
      setState({...state, errorMessage: error.message});
      navigate(`/contacts/edit/${contactId}`, {replace: false})
    }
  }

  let {loading, contact, groups, errorMessage} = state;

  return (
    <React.Fragment>
      {
        loading ? <Spinner/> : <React.Fragment>
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
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input type='text' value={contact.name} name="name" onChange={updateInput} required='true' className='form-control' placeholder='Name' />
                    </div>
                    <div className="mb-2">
                      <input type='text' value={contact.photo} name="photo" onChange={updateInput} required='true' className='form-control' placeholder='Photo Url' />
                    </div>
                    <div className="mb-2">
                      <input type='number'value={contact.mobile} name="mobile" onChange={updateInput} required='true' className='form-control' placeholder='Mobile' />
                    </div>
                    <div className="mb-2">
                      <input type='text' value={contact.email} name="email" onChange={updateInput} required='true' className='form-control' placeholder='Email' />
                    </div>
                    <div className="mb-2">
                      <input type='text' value={contact.company} name="company" onChange={updateInput} required='true' className='form-control' placeholder='Company' />
                    </div>
                    <div className="mb-2">
                      <input type='text' value={contact.title} name="title" onChange={updateInput} required='true' className='form-control' placeholder='Title' />
                    </div>
                    <div className="mb-2">
                      <select className='form-control' value={contact.groupId} name="groupId" onChange={updateInput} required='true'>
                        <option value=''>Select a Group</option>
                        {
                          groups.length > 0 && 
                            groups.map(group => {
                              return (
                                <option key={group.id} value={group.id}>{group.name}</option>
                              )
                            })
                        }
                      </select>
                    </div>
                    <div className="mb-2">
                      <input type='submit' className='btn btn-primary' value='Update' />
                      <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img src={contact.photo} alt="user" className='contact-img'/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment> 
    }
    </React.Fragment>
  )
}

export default EditContact