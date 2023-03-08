import {Button} from 'react-bootstrap';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function AddMovieButton({movie}){
    const { pushToLocal } = useLocalStorage('collection', movie);
    
    return(
        <Button onClick={pushToLocal}>Add Movie To Collection</Button>
    )
}