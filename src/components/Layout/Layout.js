import { NavMenu } from '../NavMenu/NavMenu';
import { Header } from "components/Layout/LayoutStyled";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header>
        <NavMenu />
      </Header>
      <Outlet/>
    </>
  );
};
