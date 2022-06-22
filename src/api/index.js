import axios from 'axios';

const httpClient = axios.create({
    baseURL: `https://api.github.com`
});

const API = {
    async findRepositoriesBySearchQuery(searchQuery, currentPage) {
        return await httpClient.get(`/search/repositories?q=${ searchQuery }&page=${ currentPage }`);
    }
};

export default API;