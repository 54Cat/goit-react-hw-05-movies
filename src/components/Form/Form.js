import { useState } from "react";
import { toast } from 'react-toastify';
import { SearchContainer, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from 'components/Form/FormStyled';

export default function Searchbar({onSubmit}) {   
    const [searchImgs, setSearchImgs] = useState('');

    const handelSearchImgs = e => {
        setSearchImgs( e.currentTarget.value.toLowerCase() );
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (searchImgs.trim() === '') {
            toast.warn('Please, enter a search query!');
            return;
        }
        
        onSubmit(searchImgs);
        setSearchImgs('');
    }     

        return (
            <SearchContainer>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchImgs}
                        onChange={handelSearchImgs}
                    />
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>
                </SearchForm>
            </SearchContainer>
        );
    }
