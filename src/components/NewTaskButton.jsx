import React from "react";

function NewTask() {
    
  function showForm() {
    document.getElementById("formContainer").style.top = "50%";
  }

  return (
    <button id="newTask" onClick={showForm}>
      <i class="fas fa-plus"></i>
    </button>
  );
}

export default NewTask;
