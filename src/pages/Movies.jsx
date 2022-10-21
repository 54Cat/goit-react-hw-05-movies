import {useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { AppContainer } from 'components/App/AppStyled';
import { FetchApiSearchMovies } from 'components/FetchApi/FetchApi';
import Loader from 'components/Loader/Loader';
import Form from 'components/Form/Form';
import MovieGalleryList from 'components/Gallery/GalleryList/MovieGalleryList';
import Notification from 'components/Notification/Notification';
import Button from "components/Button/Button";
import { Outlet } from "react-router-dom";

export const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

    useEffect(() => {
        setPage(1);
    }, [movieName]);
  
    useEffect(() => {
        if (!movieName) {  
            return;
        }

        const fetchMovies = async (query) => {
            setLoading(true);
            try {
                const response = await FetchApiSearchMovies(query, page);
                const data = response.results;

                if (response.total_results === 0) {
                    return toast.info("Nothing found! Try again, please.");
                }
                if (page === 1 && page >= response.total_pages) {
                    setMovies([...data]);
                    setShowLoadMore(false);
                    return;
                }
                if (page >= response.total_pages) {
                    setMovies(prevMovies => [...prevMovies, ...data]);
                    setShowLoadMore(false);
                }
                else if (page === 1) {
                    setShowLoadMore(true);
                    setMovies([...data]);
                }
                else {
                    setMovies(prevMovies => [...prevMovies, ...data]);
                    setShowLoadMore(true);
                }
            }
            catch (error) {
                setError({ error });
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies(movieName);
    }, [movieName, page])

    const loadMore = () => {
        setPage(page => page + 1);
    }

    return (
        <>
            <AppContainer>
                <Form onSubmit={setMovieName} />
                {loading && <Loader />}
                {error && <Notification />}
                {movies && <MovieGalleryList movies={movies} />}
                {showLoadMore && <Button onClick={loadMore} />}
            </AppContainer>
            <Outlet />
        </>
    )
}
