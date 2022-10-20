import styled from '@emotion/styled';

export const SearchContainer = styled.div` 
top: 51px;
left: 0;
position: sticky;
z-index: 1200;
display: flex;
justify-content: center;
align-items: center;
min-height: 32px;

padding: 16px 0;
color: #fff;
background-color: #ffffff;
`;

export const SearchForm = styled.form` 
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
overflow: hidden;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchFormBtn = styled.button` 
display: inline-block;
width: 36px;
height: 36px;
border: 0;
background-image: url('https://img.icons8.com/ios-filled/50/000000/search--v1.png');
background-size: 60%;
background-repeat: no-repeat;
background-position: center; 
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
padding: 0;

&:hover{
  opacity: 1;
}
`;

export const SearchFormBtnLabel = styled.span` 
position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
clip-path: inset(50%);
border: 0;
`;

export const SearchFormInput = styled.input` 
display: inline-block;
width: 100%;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding-left: 16px;
padding-right: 8px;

&::placeholder{
  font: inherit;
  font-size: 18px;
}
`;
