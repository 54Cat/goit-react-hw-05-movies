import {  ItemMoviePoster } from 'components/MovieDetails/SingleMovieMarkupStyled';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'original';

const navItems = [
    {href: 'cast', text:'Cast'},
    {href: 'reviews', text:'Reviews'}
]

export const SingleMovieMarkup = ({ details }) => {
    const { poster_path, original_title, overview, genres, vote_average, vote_count, release_date } = details;

    const date = new Date(release_date);
    const releaseYear = date.getFullYear();

    const itemGenres = genres.map(({ id, name }) => <li key={id}> {name} </li>)

    return (
        <>
            <ItemMoviePoster src={`${BASE_URL}${SIZE}${poster_path}`} alt={original_title} />  
            <h2>{original_title} <span>({releaseYear})</span> </h2>
            <p>{vote_average} <span>({vote_count})</span> </p>
            <div>
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
            <div>
                <h3>Genres</h3>
                <ul>{itemGenres}</ul>
            </div>

            <div>
                <p>Additional Information</p>
                <ul>
                    
                    {navItems.map(({ href, text }) => (
                        <li>
                            <Link to={href} key={href} end>
                                {text}
                            </Link>
                        </li>
                    ))} 
                </ul>
            </div>
        </>
    );
}
