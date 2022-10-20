import { GalleryItem, ItemMoviePoster, ItemMovieName, ItemLink } from 'components/Gallery/GalleryItem/MovieGalleryItemStyled';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'original';

export default function MovieGalleryItem({src, alt, id}) {
    return (
        <GalleryItem>
            <ItemLink key={id} to={`movies/${id}`}>
                <ItemMoviePoster src={`${BASE_URL}${SIZE}${src}`} alt={alt} />  
                <ItemMovieName>{alt}</ItemMovieName>
            </ItemLink>
        </GalleryItem>
    );
}