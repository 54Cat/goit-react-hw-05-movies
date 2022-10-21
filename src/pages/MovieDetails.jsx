import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { SingleMovieMarkup } from 'components/MovieDetails/SingleMovieMarkup';
import { FetchApiMovieId } from 'components/FetchApi/FetchApi';
import { AppContainer } from 'components/App/AppStyled';

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    
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

    return (
        <AppContainer>
            {loading && <Loader />}
            {error && <Notification />}
            {movie && <SingleMovieMarkup details={movie} />} 
        </AppContainer>
    )
}
