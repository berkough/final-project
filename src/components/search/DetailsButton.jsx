import { Link } from 'react-router-dom';

export default function DetailsButton({imdbID}){
    let imdbLink = `https://imdb.com/title/${imdbID}`;
    
    return(
        <Link to={imdbLink} target='_blank'>Details</Link>
    )
}