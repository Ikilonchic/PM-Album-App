import config from '../config';

export default class PhotosApiService {
    static async get({start, limit = 6, albumId}) {
        return fetch(`${config.PHOTOS_API_URL}?${albumId ? `albumId=${albumId}&` : ''}_start=${start}&_limit=${limit}`)
            .then(res => res.json());
    }

    static async getById(id) {
        return fetch(`${config.PHOTOS_API_URL}/${id}`)
            .then(res => res.json());
    }

    static async getAlbum(id) {
        return fetch(`${config.PHOTOS_API_URL}/${id}?_expand=album`)
            .then(res => res.json());
    }
};
