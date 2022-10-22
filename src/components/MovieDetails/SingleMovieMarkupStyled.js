import styled from '@emotion/styled'; import { Link } from 'react-router-dom';

export const ContainerDetails = styled.div` 
padding-left: 16px;
`;

export const SingleMovie = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
`;


// --------- MainInfo ---------
export const MainInfo = styled.div` 
display: flex;
flex-direction: row;
align-items: flex-start;
border-bottom: 1px solid darkgrey;
padding: 0 16px 16px 16px;
margin-bottom: 16px;
`;

export const ContainerPoster = styled.div` 
max-width: 300px;
`;

export const MoviePoster = styled.img` 
width: 100%;
`;

export const ContainerInfo = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 16px;
`;

export const Section = styled.div` 
padding-bottom: 16px;
`;

export const MovieName = styled.h2` 
padding-bottom: 8px; 
font-weight: 500;
`;

export const MovieYear = styled.span` 
color: darkgray;
font-weight: normal;
`;

export const Rating = styled.p` 

`;

export const TextSpan = styled.span` 
color: darkgray;
`;

export const Title = styled.h3` 
padding-bottom: 8px;
`;

export const Text = styled.p` 
`;

export const GenresList = styled.ul` 
display: flex;
flex-wrap: wrap;
`;

export const GenresItem = styled.li`
padding-right: 8px;

&: last-child {
  padding-right: 0;
}
`;


// --------- AdditionalInfo ---------
export const AdditionalInfo = styled.div`
border-bottom: 1px solid darkgrey;
padding: 0 16px 16px 16px;
margin-bottom: 16px;
`;

export const DetailsList = styled.ul` 
display: flex;
flex-wrap: wrap;
`;

export const DetailsLink = styled(Link)`
padding-right: 8px;
color: black;

&: last-child {
  padding-right: 0;
}

  &:hover{
    color: orangered;
  }
`;
