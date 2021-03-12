import config from '../config';
import { createErrorHandler } from './ErrorHandler';

export default class AlbumsApiService {
    static async get({start, limit = 6}) {
        return fetch(`${config.ALBUMS_API_URL}?_start=${start}&_limit=${limit}`)
            .then(createErrorHandler('Albums not found', []));
    }

    static async getById(id) {
        return fetch(`${config.ALBUMS_API_URL}/${id}`)
            .then(createErrorHandler('Album not found'));
    }

    static async getUser(id) {
        return fetch(`${config.ALBUMS_API_URL}/${id}?_expand=user`)
            .then(createErrorHandler('Owner for album not found'));
    }
};
