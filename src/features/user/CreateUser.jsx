import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-6 w-full max-w-sm"
    >
      {/* Unique input box */}
      <input
        type="text"
        placeholder="Enter your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-5 py-3 rounded-full border-2 border-transparent 
             bg-gradient-to-r from-slate-700 to-slate-400
             text-white placeholder-slate-300
             focus:outline-none focus:ring-2 focus:ring-slate-400 
             shadow-lg text-lg"
      />

      {username !== '' && (
        <Button type="primary">Start ordering</Button>
      )}
    </form>
  );
}

export default CreateUser;