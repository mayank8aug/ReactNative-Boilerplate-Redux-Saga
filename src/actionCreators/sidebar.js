import * as actions from '../actions/sidebar';

export function fetchSidebarData() {
    return { type: actions.SIDEBAR_DATA_LOAD };
}
