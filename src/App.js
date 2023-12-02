import {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
//4dda0730
import './App.css';
import searchIcon from './search.svg'
const API_URL='https://www.omdbapi.com/?apikey=4dda0730&s=' 
const movie1={
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies]=useState([]);
    const [SearchTerm, setSearchTerm]=useState([]);
    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}${title}`);
        const data=await response.json();

        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);


    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                placeholder="Search for movies"
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={searchIcon}
                alt="search"
                onClick={()=>searchMovies(SearchTerm)}
                />
            </div>
            {
                movies?.length>0
                ? (<div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}
            </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            ) 
            }
        </div>
    );
}
export default App;