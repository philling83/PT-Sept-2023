import { NavLink } from "react-router-dom"
const MovieNavBar = ({ movies }) => {
    return (
        <nav>
            {
                movies.map((movie) => (
                    <>
                        <NavLink key={`movie-${movie.id}`} to={`${movie.id}`}>{movie.title}</NavLink>|
                    </>
                ))
            }
        </nav>
    )
}

export default MovieNavBar
