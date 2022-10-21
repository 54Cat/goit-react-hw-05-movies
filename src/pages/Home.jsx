import {useEffect, useState } from "react";
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import MovieGalleryList from 'components/Gallery/GalleryList/MovieGalleryList';
import { FetchApiTrending } from 'components/FetchApi/FetchApi';
import { AppContainer } from 'components/App/AppStyled';

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

            {error && <Notification />}
            {isMovies &&<>
                <h2>Trending today</h2>
                <MovieGalleryList movies={movies} />
            </>}
        </AppContainer>
    )
}
