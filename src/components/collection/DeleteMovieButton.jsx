import useLocalStorage from "../../hooks/useLocalStorage";
import { Button } from 'react-bootstrap';

export default function DeleteMovieButton({movie}){
    const { removeFromLocal } = useLocalStorage('collection', movie);
    
    function handleRemove(){
        removeFromLocal();
    }

    return(
        <Button onClick={handleRemove}>Delete Movie</Button>
    )
}