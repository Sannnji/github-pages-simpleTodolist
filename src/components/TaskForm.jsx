import React, { useState } from "react";

function TaskForm(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    document.getElementById("formContainer").style.top = "150%";
    event.preventDefault();
  }

  function exitForm(event) {
    document.getElementById("formContainer").style.top = "150%";
    event.preventDefault();
  }

  return (
    <form id="formContainer">
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button className="cancelForm" onClick={exitForm}>Cancel</button>
      <button className="addTask" onClick={submitNote}>
        <i class="fas fa-plus"></i>
      </button>
    </form>
  );
}

export default TaskForm;
