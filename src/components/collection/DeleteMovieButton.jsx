import useLocalStorage from "../../hooks/useLocalStorage";
import { Button } from 'react-bootstrap';

export default function DeleteMovieButton({movie, setCheckCol}){
    const { removeFromLocal } = useLocalStorage('collection', movie);
    
    return(
        <Button onClick={()=>{
            removeFromLocal();
            setCheckCol([true]);
        }}>Delete Movie</Button>
    )
}