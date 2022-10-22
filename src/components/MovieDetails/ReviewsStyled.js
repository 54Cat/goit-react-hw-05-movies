import styled from '@emotion/styled';

export const ReviewsList = styled.ul` 
display: flex;
flex-direction: column;
margin: 0 16px;
`;

export const ReviewsItem = styled.li` 
box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
padding: 16px;
margin-bottom: 16px;

&: last-child {
  margin-bottom: 0;
}
`;

export const ReviewerName = styled.p` 
padding-bottom: 8px; 
font-weight: 500;
`;

export const ReviewText = styled.p` 
`;
