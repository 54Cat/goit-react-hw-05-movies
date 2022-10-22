import { BtnLoadMore, BtnGoBack } from 'components/Button/ButtonStyled';

export function ButtonLoadMore ({ onClick, text }) {
    return (
        <BtnLoadMore type="button" onClick={onClick}>{text}</BtnLoadMore>
    );
}
export function ButtonGoBack({ onClick, text }) {
    return (
        <BtnGoBack type="button" onClick={onClick}>{text}</BtnGoBack>
    );
}
