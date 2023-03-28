import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    );
}

export default SharedLayout;