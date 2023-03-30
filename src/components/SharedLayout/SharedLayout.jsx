import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import {
  NavigationLink,
  StyledHeader,
  StyledMain,
} from './SharedLayout.styled';

const SharedLayout = () => {
    return (
      <div>
        <StyledHeader>
          <nav>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </nav>
        </StyledHeader>
        <StyledMain>
          <Suspense
            fallback={
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </StyledMain>
      </div>
    );
}

export default SharedLayout;