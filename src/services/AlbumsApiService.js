import config from '../config';

export default class AlbumsApiService {
    static async get({start, limit = 6}) {
        return fetch(`${config.ALBUMS_API_URL}?_start=${start}&_limit=${limit}`)
            .then(res => res.json());
    }

    static async getById(id) {
        return fetch(`${config.ALBUMS_API_URL}/${id}`)
            .then(res => res.json());
    }

    static async getUser(id) {
        return fetch(`${config.ALBUMS_API_URL}/${id}?_expand=user`)
            .then(res => res.json());
    }
};
