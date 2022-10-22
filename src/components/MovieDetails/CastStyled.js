import styled from '@emotion/styled';

export const ActorList = styled.ul` 
display: grid;
max-width: calc(100vw);
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
grid-gap: 20px;
margin: 0;
padding: 0 16px 16px 16px;
list-style: none;
margin-left: auto;
margin-right: auto;
`;

export const ActorItem = styled.li` 
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
text-align: center;
`;

export const ActorPoster = styled.img` 
width: 100%;
`;

export const ActorName = styled.p` 
padding: 8px 0;
font-weight: 500;
`;

export const ActorCharacter = styled.p`  
padding-bottom: 8px;
`;
