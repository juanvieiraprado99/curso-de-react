import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite uma tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite uma descrição da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha todos os campos");
            return;
          }

          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
