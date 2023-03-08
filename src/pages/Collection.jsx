import {useState, useEffect} from 'react';
import Movie from '../components/collection/Movie';

export default function Collection(){
    const [collection, setCollection] = useState([]);
    const storage = JSON.parse(localStorage.getItem('collection'));
    
    useEffect(()=>{
        if(storage){
            setCollection(storage)
        }
    }, [storage]);

    return(
        <div className='d-inline-flex flex-wrap justify-content-center' id='movieOutput'>
        {
            collection.length > 0 ? collection.map((movie)=>{
                return <Movie movie={movie} key={movie.imdbID} setCheckCol={setCheckCol} />
            }) : <h2>Add some movies to your collection!</h2>
        }
        </div>
    )
}