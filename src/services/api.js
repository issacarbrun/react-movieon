import axions from 'axios'

//Base URL: https://api.themoviedb.org/3/
//URL API: https://api.themoviedb.org/3/movie/550?api_key=874137fb2454ebe68dbd939878f16719

const api = axions.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;