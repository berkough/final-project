import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import SearchForm from '../components/search/SearchForm';
import MovieEntry from '../components/search/MovieEntry';

export default function Search(){
    const [searchQuery, setSearchQuery] = useState('Movie');
    const {data, loading, error} = useFetch(`https://www.omdbapi.com/?apikey=687dcc5&type=movie&s=${searchQuery}`, {}, [searchQuery])

    return(
        <>
            <SearchForm setData={setSearchQuery} /> <br /><br />
            <div className='d-inline-flex flex-wrap justify-content-center' id='movieOutput'>
            {
                loading && 
                <>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </>
            }
            {
                data && data.Search.map((movie,i)=>{
                    return <MovieEntry movie={movie} key={i} />
                })
            }
            </div>
        </>
    )
}