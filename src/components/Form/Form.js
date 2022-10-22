import { useState } from "react";
import { toast } from 'react-toastify';
import { SearchContainer, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from 'components/Form/FormStyled';

export default function Searchbar({onSubmit}) {   
    const [searchMovie, setSearchMovie] = useState('');

    const handelSearchMovie = e => {
        setSearchMovie( e.currentTarget.value.toLowerCase() );
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (searchMovie.trim() === '') {
            toast.warn('Please, enter a search query!');
            return;
        }
        
        onSubmit(searchMovie);
        setSearchMovie('');
    }     

        return (
            <SearchContainer>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchMovie}
                        onChange={handelSearchMovie}
                    />
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>
                </SearchForm>
            </SearchContainer>
        );
    }
