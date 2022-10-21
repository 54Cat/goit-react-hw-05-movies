import styled from '@emotion/styled'; import { Link } from 'react-router-dom';

export const Section = styled.div` 

`;

export const Title = styled.h3` 

`;

export const Text = styled.p` 

`;

export const DetailsList = styled.ul` 
margin: 0;
padding: 0 16px;
list-style: none;
`;

export const DetailsItem = styled.li` 
color: darkgray;

`;

export const DetailsLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover{
    color: orangered;
  }
`;

export const MoviePoster = styled.img` 
width: 214px;
`;

export const MovieName = styled.h2` 
padding: 0 16px;
font-weight: 500;
`;


//-------- Cast --------
export const ActorList = styled.ul` 
margin: 0; padding: 0 16px; list-style: none;
`;

export const ActorItem = styled.li` 
color: darkgray;

`;

export const ActorPoster = styled.img` 
width: 214px;
`;

export const ActorName = styled.p` 
padding: 0 16px; font-weight: 500;
`;

export const ActorCharacter = styled.p` 
padding: 0 16px; font-weight: 500;
`;



//-------- reviews --------
export const ReviewsList = styled.ul` 
margin: 0; padding: 0 16px; list-style: none;
`;

export const ReviewsItem = styled.li` 
color: darkgray; 
`;

export const ReviewerName = styled.p` 
padding: 0 16px; font-weight: 500;
`;

export const ReviewText = styled.p` 
padding: 0 16px; font-weight: 500;
`;
