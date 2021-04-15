import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WnqLOrFqvfd5wAgY7gAXWUhntpg4EZlgIeEEV_GQ6dM'
    }
});