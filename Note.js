import React from 'react'
import './Note.css'

function Note(props) {
    
  return (
    <div className='note'>
      <textarea className='note_text' defaultValue={props.note.text}/>
    </div>
  )
}

export default Note
