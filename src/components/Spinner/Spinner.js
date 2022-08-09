import React from 'react'
import spinnerImg from '../../assets/img/3dotsspiner.gif'

let Spinner = ()=> {
  return (
    <React.Fragment>
        <img src={spinnerImg} alt="loading..." className='d-block m-auto' style={{width: '100px'}}/>
    </React.Fragment>
  )
}

export default Spinner