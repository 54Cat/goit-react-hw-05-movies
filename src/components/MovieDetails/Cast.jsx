import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import {Error} from 'components/Notification/Notification';
import { FetchApiMovieIdCredits } from 'components/FetchApi/FetchApi';
import { ActorList, ActorItem, ActorPoster, ActorName, ActorCharacter } from 'components/MovieDetails/CastStyled';
import img from 'img/noPhoto.jpg';


const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'original';

export const Cast = () => {
    const [cast, setCast] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchMovieIdCast = async (movieId) => {
            setLoading(true);
            try {
                const response = await FetchApiMovieIdCredits(movieId);
                const data = response.cast;
                setCast(data);
            }
            catch (error) {
                setError({ error });
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovieIdCast(id);
    }, [id])

    return (
        <>
            {loading && <Loader />}
            {error && <Error />}
            {cast && <>
                <ActorList> 
                    {cast.map(({ cast_id, original_name, character, profile_path }) => (
                        <ActorItem key={cast_id}>
                            <ActorPoster src={profile_path ? `${BASE_URL}${SIZE}${profile_path}` : img} alt={original_name} />
                            <ActorName>{original_name}</ActorName>
                            <ActorCharacter>{character}</ActorCharacter>
                            </ActorItem>
                    ))} 
                </ActorList>
            </>} 
        </>
    )
}
