import { Card } from 'react-bootstrap';
import DeleteMovieButton from './DeleteMovieButton';

export default function Movie({movie}){
console.log('This is the Movie Component.');
console.log(movie);

    return(
        <Card style={{width: '18rem'}} id={movie.imdbID}>
            <Card.Img variant='top' src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/300' : movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                <Card.Text>
                    <DeleteMovieButton movie={movie} />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}