import React, { useState } from 'react';
import { useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//a520b903
const API_URL = 'http://www.omdbapi.com?apikey=a520b903'; 


//static json data to display our movie
// const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// };

const App = () => {
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
    
        const response = await fetch(`${API_URL}&s=${title}`); //two back `` to enter string template
        const data = await response.json();
    
        //console.log(data.Search);
        //using useEffect here
        setMovies(data.Search);
       
    }
    
   // console.log(movies[0]);
    useEffect(()=> {
        searchMovies(searchTerm);
    }, [searchTerm]);

    return (
        <div className='app'>
            <h1>MoviePool</h1>

            <div className='search'>
                <input 
                 placeholder='Search for movies'
                 value={searchTerm}
                 onChange={(e) => {setSearchTerm(e.target.value)}}
                 />
                 <img
                    src={SearchIcon}
                    alt='search'
                    onClick={()=>{searchMovies(searchTerm)}}
                 />
            </div>
            {
                movies?.length > 0 ? (
                <div className='container'>
                    {//iterating over each of the movie using map function 
                       movies.map((movie)=> (
                           <MovieCard key={movies.imdbID} movie1={movie}/>
                       ))
                    }
               </div> ) : (
                   <div className="empty">
                       <h1>No Movies found</h1>
                   </div>
               ) 
            }
            
        </div>
    );
}

export default App;