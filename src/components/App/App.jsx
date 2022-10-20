// import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Layout } from "components/Header/Layout/Layout";
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/MovieDetails/Cast';
import { Reviews } from 'components/MovieDetails/Reviews';
import { NotFound } from 'pages/NotFound';

// const createAsyncComponent = (path) => lazy(() => import(path));
// const Home = createAsyncComponent('pages/Home');
// const Movies = createAsyncComponent('pages/Movies');
// const MovieDetails  = createAsyncComponent('pages/MovieDetails');
// const Cast = createAsyncComponent('components/Cast');
// const Reviews  = createAsyncComponent('components/Reviews');
// const NotFound  = createAsyncComponent('pages/NotFound');

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
