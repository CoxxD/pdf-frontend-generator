import React, { useEffect, useState } from "react";
import TableMovies from "../components/table-movies";
import generatePDF from "../services/report-generator";
import { MOVIES_MOCK } from "../mock/film.mock";

const MoviesHomepage = () => {

    const [movies, setMovies] = useState([]);
    const columnsPDF = [
        { poster: 'Poster', id: 'ID', title: 'Title', year: 'Year', available: 'Available' }
    ]


    useEffect(() => {
        const getAllMovies = async () => {
            try {
                // const response = await axios.get("https://fake-movie-database-api.herokuapp.com/api?s=batman");
                // setMovies(response.data.Search);
                setMovies(MOVIES_MOCK.Search);
            } catch (err) {
                console.log(`Error fetching movies: ${err}`);
            }
        };
        getAllMovies();
    }, []);

    return (
        <div>
            <TableMovies data={movies} />
            <div className="row">
                <button
                    className="btn"
                    onClick={() => generatePDF(movies.map(el => ({
                        poster: el.Poster,
                        id: el.imdbID,
                        title: el.Title,
                        year: el.Year,
                        available: el.Available ? 'OK' : 'KO'
                    })), columnsPDF, true)}
                >
                    DOWNLOAD MOVIES PDF
                </button>
            </div>
        </div>
    );
};

export default MoviesHomepage;