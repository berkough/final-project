import useLocalStorage from "../../hooks/useLocalStorage";
import { Button } from 'react-bootstrap';

export default function DeleteMovieButton({movie}){
    const { removeFromLocal } = useLocalStorage('collection', movie);
    
    return(
        <Button onClick={()=>{
            removeFromLocal();
        }}>Delete Movie</Button>
    )
}