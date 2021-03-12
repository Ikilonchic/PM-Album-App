import config from '../config';
import { createErrorHandler } from './ErrorHandler';

export default class PhotosApiService {
    static async get({start, limit = 6, albumId}) {
        return fetch(`${config.PHOTOS_API_URL}?${albumId ? `albumId=${albumId}&` : ''}_start=${start}&_limit=${limit}`)
            .then(createErrorHandler('Photos not found', []));
    }

    static async getById(id) {
        return fetch(`${config.PHOTOS_API_URL}/${id}`)
            .then(createErrorHandler('Photo not found'));
    }

    static async getAlbum(id) {
        return fetch(`${config.PHOTOS_API_URL}/${id}?_expand=album`)
            .then(createErrorHandler(`Album for photo not found`));
    }
};
