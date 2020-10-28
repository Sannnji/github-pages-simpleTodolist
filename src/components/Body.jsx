import React, { useState } from "react";

import Note from "./Note.jsx";
import TaskForm from "./TaskForm.jsx";
import NewTaskButton from "./NewTaskButton";

function Body() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <section id="bodySec">
      <div className="container-fluid">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <TaskForm onAdd={addNote} />
        <NewTaskButton />
      </div>
    </section>
  );
}

export default Body;
