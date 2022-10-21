import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { FetchApiMovieIdReviews } from 'components/FetchApi/FetchApi';
import Button from "components/Button/Button";
import { ReviewsList, ReviewsItem, ReviewerName, ReviewText } from 'components/MovieDetails/SingleMovieMarkupStyled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  
  const { id } = useParams();
  
    useEffect(() => {
        setPage(1);
    }, []);
  
    useEffect(() => {
        const fetchMovieIdCast = async (movieId) => {
            setLoading(true);
            try {
                const response = await FetchApiMovieIdReviews(movieId, page);
                const data = response.results;
              console.log("response", response);
              console.log("data", data);
              
                if (response.total_results === 0) {
                    return ;
                }
                if (page === 1 && page >= response.total_pages) {
                    setReviews([...data]);
                    setShowLoadMore(false);
                    return;
                }
                if (page >= response.total_pages) {
                    setReviews(prevMovies => [...prevMovies, ...data]);
                    setShowLoadMore(false);
                }
                else if (page === 1) {
                    setReviews([...data]);
                    setShowLoadMore(true);
                }
                else {
                    setReviews(prevMovies => [...prevMovies, ...data]);
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
        fetchMovieIdCast(id);
    }, [id, page])
  
  const loadMore = () => {
        setPage(page => page + 1);
    }

    return (
        <>
            {loading && <Loader />}
            {error && <Notification />}
            {showLoadMore && <Button onClick={loadMore} />}
            {!reviews && <p>Sorry, no reviews yet.</p>}
            {reviews && <>
                <ReviewsList> 
                    {reviews.map(({ id, author, content }) => (
                        <ReviewsItem key={id}>
                            <ReviewerName>Author: {author}</ReviewerName>
                            <ReviewText>{content}</ReviewText>
                        </ReviewsItem>
                    ))} 
                </ReviewsList>

            </>} 
        </>
    )
}
