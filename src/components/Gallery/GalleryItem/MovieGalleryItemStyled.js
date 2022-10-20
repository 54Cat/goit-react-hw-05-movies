import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GalleryItem = styled.li` 
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover{
  cursor: pointer;
  transform: scale(1.05);
}
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover{
    color: orangered;
  }
`;

export const ItemMoviePoster = styled.img` 
width: 100%;
`;

export const ItemMovieName = styled.p` 
padding: 0 16px;
font-weight: 500;
`;
