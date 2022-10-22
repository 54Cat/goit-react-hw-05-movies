import {useEffect, useState } from "react";
import Loader from 'components/Loader/Loader';
import {Error} from 'components/Notification/Notification';
import MovieGalleryList from 'components/Gallery/GalleryList/MovieGalleryList';
import { FetchApiTrending } from 'components/FetchApi/FetchApi';
import { AppContainer, Title } from 'components/App/AppStyled';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchTrending = async () => {
        setLoading(true);
            try {
                const response = await FetchApiTrending();
                const data = response.results;
                setMovies(prevMovies => [...prevMovies, ...data]);
            }
            catch (error) {
                setError({ error });
            }
            finally {
                setLoading(false);
            }
        }
        fetchTrending();
    }, [])
            
    const isMovies = Boolean(movies.length);
    return (
        <AppContainer>
            {loading && <Loader />}

            {error && <Error />}
            {isMovies &&<>
                <Title>Trending today</Title>
                <MovieGalleryList movies={movies} />
            </>}
        </AppContainer>
    )
}
