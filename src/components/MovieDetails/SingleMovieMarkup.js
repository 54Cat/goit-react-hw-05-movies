import { SingleMovie,MainInfo,AdditionalInfo, ContainerPoster, ContainerInfo,Section, MovieName, MovieYear,MoviePoster, Title, Rating, Text, TextSpan, GenresList, GenresItem, DetailsList, DetailsLink } from 'components/MovieDetails/SingleMovieMarkupStyled';
import { Outlet } from 'react-router-dom';
import img from 'img/noPoster.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'original';

const detailsItems = [
    {href: 'cast', text:'Cast'},
    {href: 'reviews', text:'Reviews'}
]

export const SingleMovieMarkup = ({ details }) => {
    const { poster_path, original_title, overview, genres, vote_average, release_date } = details;

    const date = new Date(release_date);
    const releaseYear = date.getFullYear();
    const rating = vote_average.toFixed(1);

    return (
        <SingleMovie>
            <MainInfo>
                <ContainerPoster>
                    <MoviePoster src={poster_path ? `${BASE_URL}${SIZE}${poster_path}` : img} alt={original_title} />
                </ContainerPoster>
                
                <ContainerInfo>
                    <Section>
                        <MovieName>{original_title} <MovieYear>({releaseYear})</MovieYear> </MovieName>
                        <Rating>Rating: {rating}<TextSpan>/10</TextSpan> </Rating>
                    </Section>
                    
                    <Section>
                        <Title>Overview</Title>
                        <Text>{overview}</Text>
                    </Section>

                    <Section>
                        <Title>Genres</Title>
                        <GenresList>
                            {genres.map(({ name }) =>
                                <GenresItem key={name}>
                                    {name}
                                </GenresItem>
                            )}
                        </GenresList>
                    </Section>
                    
                </ContainerInfo>
            </MainInfo>

            <AdditionalInfo>
                <>
                    <Title>Additional Information</Title>
                    <DetailsList> 
                        {detailsItems.map(({ href, text }) => (
                                <DetailsLink key={href} to={href}>
                                    {text}
                                </DetailsLink>
                        ))} 
                    </DetailsList>
                </>
            </AdditionalInfo>
            <Outlet/>
        </SingleMovie>
    );
}
