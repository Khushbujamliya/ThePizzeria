import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary:
      base +
      ' bg-slate-700 text-white px-6 py-3 shadow-md hover:bg-blue-300 hover:text-slate-900 focus:ring-blue-300 hover:shadow-lg hover:scale-105',
    small:
      base +
      ' bg-slate-700 text-white px-4 py-2 text-xs shadow-sm hover:bg-blue-300 hover:text-slate-900 focus:ring-blue-300',
    round:
      base +
      ' bg-slate-700 text-white px-3 py-1 text-sm shadow-sm hover:bg-blue-300 hover:text-slate-900 focus:ring-blue-300',
    secondary:
      base +
      ' border-2 border-slate-400 text-slate-600 px-6 py-3 hover:bg-blue-100 hover:text-slate-900 focus:ring-blue-200',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
