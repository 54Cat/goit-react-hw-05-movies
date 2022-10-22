import { GalleryItem, ItemMoviePoster, ItemMovieName, ItemLink } from 'components/Gallery/GalleryItem/MovieGalleryItemStyled';
import img from 'img/noPoster.jpg';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = 'original';

export default function MovieGalleryItem({ src, alt, id }) {
    const location = useLocation();

    return (
        <GalleryItem>
            <ItemLink key={id} to={`/movies/${id}`} state={{from: location}}>
                <ItemMoviePoster src={src ? `${BASE_URL}${SIZE}${src}` : img} alt={alt} />  
                <ItemMovieName>{alt}</ItemMovieName>
            </ItemLink>
        </GalleryItem>
    );
}
