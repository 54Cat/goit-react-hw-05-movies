import { Section, MovieName, MoviePoster, Title, Text, DetailsList,DetailsItem, DetailsLink } from 'components/MovieDetails/SingleMovieMarkupStyled';
import { Outlet } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'original';

const detailsItems = [
    {href: 'cast', text:'Cast'},
    {href: 'reviews', text:'Reviews'}
]

export const SingleMovieMarkup = ({ details }) => {
    const { poster_path, original_title, overview, genres, vote_average, vote_count, release_date } = details;

    const date = new Date(release_date);
    const releaseYear = date.getFullYear();

    return (
        <>
            <MoviePoster src={`${BASE_URL}${SIZE}${poster_path}`} alt={original_title} /> 
            
            <MovieName>{original_title} <span>({releaseYear})</span> </MovieName>

            <Text>{vote_average} <span>({vote_count})</span> </Text>
            <Section>
                <Title>Overview</Title>
                <Text>{overview}</Text>
            </Section>

            <Section>
                <Title>Genres</Title>
                <DetailsList>
                    {genres.map(({ name }) =>
                        <DetailsItem key={name}>
                            {name}
                        </DetailsItem>
                    )}
                </DetailsList>
            </Section>

            <Section>
                <Title>Additional Information</Title>
                <DetailsList> 
                    {detailsItems.map(({ href, text }) => (
                            <DetailsLink key={href} to={href}>
                                {text}
                            </DetailsLink>
                    ))} 
                </DetailsList>
            </Section>
            <Outlet/>
        </>
    );
}
