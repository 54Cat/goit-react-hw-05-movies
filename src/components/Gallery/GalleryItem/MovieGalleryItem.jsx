import { GalleryItem, ItemMoviePoster, ItemMovieName, ItemLink } from 'components/Gallery/GalleryItem/MovieGalleryItemStyled';
import img from 'img/noPoster.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'original';

export default function MovieGalleryItem({src, alt, id}) {
    return (
        <GalleryItem>
            <ItemLink key={id} to={`movies/${id}`}>
                <ItemMoviePoster src={src ? `${BASE_URL}${SIZE}${src}` : img} alt={alt} />  
                <ItemMovieName>{alt}</ItemMovieName>
            </ItemLink>
        </GalleryItem>
    );
}
