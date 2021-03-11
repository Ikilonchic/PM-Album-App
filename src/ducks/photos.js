import PhotosApiService from '../services/PhotosApiService';

const ADD_ALL = 'photos/add/all';
const CLEAR_ALL = 'photos/clear/all';

const SET_CURRENT = 'photos/set/current';
const DELETE_CURRENT = 'photos/delete/current';


export const loadAllPhotos = ({
    start,
    limit = 6,
    albumId,
}) => (dispatch) => {
    PhotosApiService.get({
        start,
        limit,
        albumId,
    }).then(data => dispatch(addAll(data)));
};

export const clearAllPhotos = () => (dispatch) => {
    dispatch(deleteAll());
};

export const loadCurrentPhoto = (id) => async (dispatch) => {
    const data = await PhotosApiService.getById(id);
    dispatch(setCurrent(data));
};

export const removeCurrentPhoto = () => (dispatch) => {
    dispatch(deleteCurrent());
};


const addAll = (photos) => ({
    type: ADD_ALL,
    payload: photos,
});

const deleteAll = () => ({
    type: CLEAR_ALL,
});

const setCurrent = (photos) => ({
    type: SET_CURRENT,
    payload: photos,
});

const deleteCurrent = () => ({
    type: DELETE_CURRENT,
});


const initialState = {
    all: [],
    current: null,
};


export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case ADD_ALL:
            return {
                ...state,
                all: [...state.all, ...action.payload],
            };
        case CLEAR_ALL:
            return {
                ...state,
                all: [],
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        case DELETE_CURRENT:
            return {
                ...state,
                current: null,
            };
        default:
            return state;
    }
};
