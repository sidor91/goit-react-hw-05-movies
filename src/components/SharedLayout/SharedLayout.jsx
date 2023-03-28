import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
    return (
      <div>
        <header>
          <nav>
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
              }}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
}