import { Card } from 'react-bootstrap';
import AddMovieButton from './AddMovieButton';
import DetailsButton from './DetailsButton';

export default function MovieEntry({movie}){
console.log('This is the MovieEntry Component.');
console.log(movie);

    return(
        <Card style={{width: '18rem'}} id={movie.imdbID}>
            <Card.Img variant='top' src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/300' : movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                <Card.Text>
                    <DetailsButton imdbID={movie.imdbID} /> 
                    <br />
                    <AddMovieButton movie={movie} />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}