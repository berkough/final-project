export default function useLocalStorage(key, data){

    let temp = [], temp2 = [], temp3 = [], stored = [], stored2 = [];


    function pushToLocal(){
        console.log('Pushing to LocalStorage...')
        if(!localStorage.getItem(key)){
            localStorage.setItem(key,JSON.stringify(data));
        } else {
            temp.push(data);
            temp2 = JSON.parse(localStorage.getItem(key));
            temp3 = temp.concat(temp2);
            localStorage.setItem(key,JSON.stringify(temp3));
            alert('Movie added!')
        }
    }

    function removeFromLocal(){
        stored = JSON.parse(localStorage.getItem(key))
        stored2 = stored.filter(movie => movie.imdbID !== data.imdbID);
        console.log(stored2);
        localStorage.setItem(key,JSON.stringify(stored2));    
    }

    return {pushToLocal, removeFromLocal}
}