import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import {Error} from 'components/Notification/Notification';
import { SingleMovieMarkup } from 'components/MovieDetails/SingleMovieMarkup';
import { FetchApiMovieId } from 'components/FetchApi/FetchApi';
import {ButtonGoBack} from "components/Button/Button";
import { ContainerDetails } from 'components/MovieDetails/SingleMovieMarkupStyled';

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const fetchMovieId = async (movieId) => {
            setLoading(true);
            try {
                const data = await FetchApiMovieId(movieId);
                setMovie(data);
            }
            catch (error) {
                setError({ error });
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovieId(id);
    }, [id])

    const goBack = () => {
        navigate(location.state?.from ?? '/');
    };
    console.log("location", location);

    return (
        <>
            <ContainerDetails>
                <ButtonGoBack type="button" onClick={goBack} text='Go back' />
            </ContainerDetails>
            {loading && <Loader />}
            {error && <Error />}
            {movie && <SingleMovieMarkup details={movie} />} 
        </>
    )
}
