export const TOGGLE_SIDEBAR = 'HCORE/TOGGLE_SIDEBAR';

export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR,
});

export const SET_SIDEBAR_VISIBILITY = 'HCORE/SET_SIDEBAR_VISIBILITY';

export const setSidebarVisibility = isOpen => ({
    type: SET_SIDEBAR_VISIBILITY,
    payload: isOpen,
});
