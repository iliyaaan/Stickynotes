import React from 'react'
import plusIcon from '../../Assets/Add2.pnj.webp'
import "./AddIcon.css"



function AddIcon({onClick}) {
  return (
    <div className='addButton'onClick={onClick}>
      <img src={plusIcon} alt="Add"style={{ width: '100px', height: '100px' }} />
    </div>
  )
}

export default AddIcon
