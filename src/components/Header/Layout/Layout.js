import { NavMenu } from '../NavMenu/NavMenu';
import { Container, Header } from "components/Header/Layout/LayoutStyled";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <NavMenu />
      </Header>
      <Outlet/>
    </Container>
  );
};
