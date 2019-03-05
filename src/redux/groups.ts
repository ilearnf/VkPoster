import {IGroup} from "../data/Group";

const SELECT_GROUPS: string = "groups/SELECT_GROUPS";

const GET_GROUPS: string = "groups/GET_GROUPS";



export const selectGroups = (groups: IGroup[]) => async (dispatch) => dispatch({
    type: SELECT_GROUPS, 
    groups
});

export const getGroups = () => (dispatch) => {
    (window as any).VK.Api.call("groups.get", {fields: "id,name", extended: 1, v: "5.92"}, 
            r => dispatch({
                type: GET_GROUPS, 
                groups: r.response.items
            })
    );
};

interface IGroupsState {
    groups: IGroup[];
    selectedGroups: IGroup[];
}

const defaultState: IGroupsState = {
    groups: [], 
    selectedGroups: []
};

export default (state: IGroupsState = defaultState, action) => {
    switch (action.type) {
        case SELECT_GROUPS:
            return {
                ...state, 
                selectedGroups: action.groups
            };
        
        case GET_GROUPS:
            return {
                ...state, 
                groups: action.groups
            };
        default:
            return state;
    }
};

