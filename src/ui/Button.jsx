import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block text-sm rounded-full bg-indigo-600 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-indigo-400 focus:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm rounded-full border-2 border-indigo-300 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-indigo-300 hover:text-white focus:bg-indigo-300 focus:text-white focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
