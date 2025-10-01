import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-slate-50">
      <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-800">
        The Best Pizza
      </h1>

      <p className="mb-10 text-lg md:text-2xl text-slate-500 italic">
        “A taste of tradition, delivered fresh.”
      </p>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
