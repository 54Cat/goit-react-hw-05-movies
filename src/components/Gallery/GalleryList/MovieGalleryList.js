import MovieGalleryItem from 'components/Gallery/GalleryItem/MovieGalleryItem';
import { GalleryList } from 'components/Gallery/GalleryList/MovieGalleryStyled';

export default function MovieGalleryList({ movies }) {
    const elements = movies.map(({ id, poster_path, original_title }) => <MovieGalleryItem
        key={id}
        id={id}
        src={poster_path}
        alt={original_title}
    />)

    return (
        <GalleryList> {elements} </GalleryList>
    )
}