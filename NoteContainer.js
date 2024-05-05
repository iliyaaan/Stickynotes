import React, { useState } from 'react';
import Note from '../Notes/Note';
import './NoteContainer.css';
import AddIcon from '../AddIcon/AddIcon';
import Draggable from 'react-draggable';
import { FaTimes } from 'react-icons/fa'; 

function NoteContainer() {
  const [notes, setNotes] = useState([{ id: 1, text: "", color: "pink" }]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const lightColors = ["lightblue", "lightgreen", "lightyellow", "lightpink","cyan"];

  const addNote = () => {
    const newColorIndex = (currentColorIndex + 1) % lightColors.length;
    const newColor = lightColors[newColorIndex];
    setNotes(prevNotes => [...prevNotes, { id: prevNotes.length + 1, text: "", color: newColor }]);
    setCurrentColorIndex(newColorIndex);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className='note-container'>
      <h2>NOTES</h2>
      <div className="container">
        <div className="notes-container">
          {notes.map((note, index) => (
            <Draggable key={note.id} cancel=".add-icon">
              <div className='note-container_notes' style={{ backgroundColor: note.color }} key={note.id}>
                <Note note={note} />
                <div className="delete-icon" onClick={() => deleteNote(note.id)}> 
                  <FaTimes />
                </div>
              </div>
            </Draggable>
          ))}
        </div>
        <div className="add-icon-container">
          <AddIcon onClick={addNote} className="add-icon" />
        </div>
      </div>
    </div>
  );
}

export default NoteContainer;
