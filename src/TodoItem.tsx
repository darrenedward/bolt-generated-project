import React, { useState } from 'react';
import { Trash, CheckSquare, Edit } from 'lucide-react';

interface TodoItemProps {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
  toggleComplete: (index: number) => void;
  handleEdit: (index: number) => void;
  editingTodo: { id: number; text: string } | null;
  handleEditSave: (index: number, newText: string) => void;
  handleEditCancel: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  deleteTodo,
  toggleComplete,
  handleEdit,
  editingTodo,
  handleEditSave,
  handleEditCancel,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEditSave(index, editText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditText(todo);
  };

  return (
    <li className="flex items-center justify-between p-2 border rounded">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            className="flex-grow px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">
              Save
            </button>
            <button onClick={handleCancelClick} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <span className="flex-grow">{todo}</span>
          <div className="flex space-x-2">
            <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
              <Edit className="h-5 w-5" />
            </button>
            <button onClick={() => deleteTodo(index)} className="text-red-500 hover:text-red-700">
              <Trash className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
