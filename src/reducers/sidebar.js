import * as actions from '../actions/sidebar';

const initialState = {
    sidebarData: null,
    loading: false
};

function sidebar(prevState = initialState, action) {
    switch (action.type) {
        case actions.SIDEBAR_DATA_LOAD:
            return Object.assign({}, prevState, {
                loading: true
            });
        case actions.SIDEBAR_DATA_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                sidebarData: action.data
            });
        case actions.SIDEBAR_DATA_FAIL:
            return Object.assign({}, prevState, {
                loading: false,
                sidebarData: null
            });
        default:
            return prevState;
    }
}

export default sidebar;
