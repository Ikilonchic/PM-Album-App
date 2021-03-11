import AlbumsApiService from "../services/AlbumsApiService";


const SET_CURRENT = 'albums/set/current';
const DELETE_CURRENT = 'albums/delete/current';


export const loadCurrentAlbum = (id) => async (dispatch) => {
    const data = await AlbumsApiService.getById(id);
    delete data.userId;

    const { user } = await AlbumsApiService.getUser(data.id);

    data.owner = {
        name: user.name,
        email: user.email,
    };

    dispatch(setCurrent(data));
};

export const removeCurrentAlbum = () => (dispatch) => {
    dispatch(deleteCurrent());
}


const setCurrent = (albumData) => ({
    type: SET_CURRENT,
    payload: albumData,
});

const deleteCurrent = () => ({
    type: DELETE_CURRENT,
});


const initialState = {
    current: null,
};


export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        case DELETE_CURRENT:
            return {
                ...state,
                current: null,
            }
        default:
            return state;
    }
};
