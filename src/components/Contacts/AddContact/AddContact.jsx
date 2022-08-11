import React, { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';

const AddContact = () => {

  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: ""
    },
    groups: [],
    errorMessage: ''
  });

  let updateInput = (event)=> {
    setState({
      ...state, 
      contact: {
        ...state.contact,
        [event.target.name] : event.target.value
      }
    });
  };
  
  useEffect(async ()=>{
    try {
      setState({...state, loading: true});
      let response = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        groups: response.data
      });
    } catch (error) {
      setState({
        ...state,
        errorMessage: error.message
      });
    }
  },[]);

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.createContact(state.contact);
      if(response){
        navigate('/contacts/list', {replace: true});
      }
    } catch (error) {
      setState({...state.contact, errorMessage: error.message});
      navigate('/contacts/add', {replace: false});
    }
  };

  let {loeading, contact, groups, errorMessage} = state;

  return (
    <React.Fragment>
        <section className='add-contact p-3'>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h4 text-success fw-bold">Create Contact</p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Esse, nihil commodi id eveniet ipsum odio inventore eos atque fugiat? 
                  Delectus ullam eveniet, aut animi deleniti id odit minus repudiandae commodi.
                </p>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Name' required="true" name="name" value={contact.name} onChange={updateInput}/>
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Photo Url' required="true" name="photo" value={contact.photo} onChange={updateInput}/>
                    </div>
                    <div className="mb-2">
                      <input type='number' className='form-control' placeholder='Mobile' required="true" name="mobile" value={contact.mobile} onChange={updateInput}/>
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Email' required="true" name="email" value={contact.email} onChange={updateInput}/>
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Company' required name="company" value={contact.company} onChange={updateInput}/>
                    </div>
                    <div className="mb-2">
                      <input type='text' className='form-control' placeholder='Title' required="true" name="title" value={contact.title} onChange={updateInput}/>
                    </div>
                    <div className="mb-2">
                      <select className='form-control' required="true" name='groupId' value={contact.groupId} onChange={updateInput}>
                        <option value=''>Select a Group</option>
                        {
                            groups.length > 0 &&
                                groups.map(group => {
                                    return(
                                        <option key={group.id} value={group.id}>{group.name}</option>
                                    )
                                })
                        }
                      </select>
                    </div>
                    <div className="mb-2">
                      <input type='submit' className='btn btn-success' value='Create' />
                      <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}

export default AddContact