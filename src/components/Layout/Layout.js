import { NavMenu } from '../NavMenu/NavMenu';
import { Header } from "components/Layout/LayoutStyled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header>
        <NavMenu />
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
