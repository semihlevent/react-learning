import axios from 'axios';


const KEY = 'AIzaSyCM6lHiCA5a8M--aUhr76AlypFnGqueLdI';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});