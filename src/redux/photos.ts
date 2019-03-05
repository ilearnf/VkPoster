import {IPhoto} from "../data/Photo";

const SELECT_PHOTO: string = "photos/SELECT_PHOTO";

const GET_PHOTOS: string = "photos/GET_PHOTOS";



export const selectPhoto = (photo: IPhoto) => async (dispatch) => dispatch({
    type: SELECT_PHOTO,
    photo
});

export const getPhotos = () => (dispatch) => {
    (window as any).VK.Api.call("photos.getAll", {v: "5.92"},
        r => dispatch({
            type: GET_PHOTOS,
            groups: r.response.items
        })
    );
};

interface IPhotosState {
    photos: IPhoto[];
    selectedPhotos: IPhoto[];
}

const defaultState: IPhotosState = {
    photos:[], 
    selectedPhotos:[]
};

export default (state: IPhotosState = defaultState, action) => {
    switch (action.type) {
        case SELECT_PHOTO:
            return {
                ...state, 
                selectedPhotos: state.selectedPhotos.includes(action.photo) 
                    ? state.selectedPhotos 
                    : [...state.selectedPhotos, action.photo]
            };

        case GET_PHOTOS:
            return {
                ...state,
                photos: action.groups
            };
        default:
            return state;
    }
};

