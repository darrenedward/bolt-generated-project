import { useState } from 'react';
import { Plus, Trash, CheckSquare, Edit } from 'lucide-react';
import TodoItem from './TodoItem';

const unsplashImage = 'https://source.unsplash.com/random'; // Replace with a specific Unsplash image URL

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState<{ id: number; text: string } | null>(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index: number) => {
    // Implement toggle complete logic here (e.g., using an array of objects with a 'completed' property)
  };

  const handleEdit = (index: number) => {
    setEditingTodo({ id: index, text: todos[index] });
  };

  const handleEditSave = (index: number, newText: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
    setEditingTodo(null);
  };

  const handleEditCancel = () => {
    setEditingTodo(null);
  };


  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${unsplashImage})` }}
    >
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">My Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              handleEdit={handleEdit}
              editingTodo={editingTodo}
              handleEditSave={handleEditSave}
              handleEditCancel={handleEditCancel}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
