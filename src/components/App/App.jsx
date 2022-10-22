import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from "components/Layout/Layout";
import Home from 'pages/Home';

const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("components/MovieDetails/Cast"));
const Reviews = lazy(() => import("components/MovieDetails/Reviews"));
const NotFound = lazy(() => import("pages/NotFound"));

export const App = () => {

    return (
        <>
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
            <ToastContainer
                autoClose={3000}
                pauseOnFocusLoss={false}
            />
        </>
    );
}
