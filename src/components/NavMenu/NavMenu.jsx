import { Nav, NavItem } from 'components/NavMenu/NavMenuStyled';

const navItems = [
    {href: '', text:'Home'},
    {href: 'movies', text:'Movies'}
]

export const NavMenu = () => {

    return (
        <Nav>
            {navItems.map(({ href, text }) => (
                <NavItem to={href} key={href} end>
                    {text}
                </NavItem>
            ))} 
        </Nav>
    );
}